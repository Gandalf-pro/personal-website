import { z } from "zod";

import { TRPCError } from "@trpc/server";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { generateUserToken } from "~/server/utils/authUtils";
import bcrypt from "bcryptjs";

const OLDER_PASSWORD_TRY_AMOUNT = 10;

export const authRouter = createTRPCRouter({
  login: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string().trim().min(6).max(32),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const userWithPassword = await ctx.db.query.users.findFirst({
        where(fields, { eq }) {
          return eq(fields.email, input.email);
        },
        with: {
          passwords: {
            orderBy(fields, { desc }) {
              return desc(fields.createdAt);
            },
            limit: OLDER_PASSWORD_TRY_AMOUNT,
          },
        },
      });

      if (!userWithPassword) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message:
            "Sorry, either this user doesn't exist or your password is wrong.",
        });
      }
      const { passwords, ...user } = userWithPassword;
      const lastPassword = passwords.at(0);
      if (!lastPassword) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message:
            "Sorry, either this user doesn't exist or your password is wrong.",
        });
      }
      const isLastPasswordMatch = await bcrypt.compare(
        input.password,
        lastPassword.password,
      );

      if (!isLastPasswordMatch) {
        // Try last OLDER_PASSWORD_TRY_AMOUNT passwords for a more specific error message
        for (let i = 1; i < passwords.length; i++) {
          const password = passwords[i]!;
          const isPasswordMatch = await bcrypt.compare(
            input.password,
            password.password,
          );
          if (isPasswordMatch) {
            throw new TRPCError({
              code: "NOT_FOUND",
              message: "You are trying an old password.",
            });
          }
        }

        throw new TRPCError({
          code: "NOT_FOUND",
          message:
            "Sorry, either this user doesn't exist or your password is wrong.",
        });
      }

      const token = generateUserToken(user);

      return { user, token };
    }),
});
