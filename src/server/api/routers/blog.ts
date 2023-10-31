import { TRPCError } from "@trpc/server";
import slugify from "slugify";
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
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
  createBlog: protectedProcedure
    .input(
      z.object({
        title: z.string().min(3).max(200),
        body: z.string().min(3).max(30_000),
      }),
    )
    .query(async ({ input, ctx }) => {
      const slug = slugify(input.title);
      const now = new Date();

      const res = await ctx.db
        .insert(blogs)
        .values({
          authorId: ctx.user.id,
          body: input.body,
          title: input.title,
          slug,
          createdAt: now,
          updatedAt: now,
        })
        .returning({
          id: blogs.id,
        });

      return { id: res.at(0)!.id };
    }),
});
