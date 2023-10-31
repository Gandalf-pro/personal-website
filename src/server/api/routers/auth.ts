import { z } from "zod";

import { TRPCError } from "@trpc/server";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { generateUserToken } from "~/server/utils/authUtils";

export const authRouter = createTRPCRouter({
  login: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string().trim().min(6).max(32),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.db.query.users.findFirst({
        where(fields, { eq }) {
          return eq(fields.email, input.email);
        },
      });

      if (!user) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message:
            "Sorry either this user doesn't exist or your password is wrong.",
        });
      }

      const token = generateUserToken(user);

      return { user, token };
    }),
});
