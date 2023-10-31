import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { blogs } from "~/server/db/schema";

export const blogRouter = createTRPCRouter({
  getListOfBlogs: publicProcedure.query(async ({ ctx }) => {
    const tmp = await ctx.db.query.blogs.findMany({
      orderBy(fields, { desc }) {
        return desc(fields.createdAt);
      },
      with: {
        author: true,
        skills: {
          with: {
            skill: true,
          },
        },
      },
    });

    return { blogs: tmp };
  }),
  getSingleBlog: publicProcedure
    .input(
      z.object({
        id: z.string().cuid2(),
      }),
    )
    .query(async ({ ctx }) => {
      const tmp = await ctx.db.query.blogs.findFirst({
        with: {
          author: true,
          skills: {
            with: {
              skill: true,
            },
          },
        },
      });

      if (!tmp) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Sorry can't find this blog",
        });
      }

      return { blog: tmp };
    }),
});
