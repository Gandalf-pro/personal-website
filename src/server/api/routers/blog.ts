import { TRPCError } from "@trpc/server";
import { and, eq } from "drizzle-orm";
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
      z.union([
        z.object({
          id: z.string().cuid2(),
        }),
        z.object({
          slug: z.string().min(3).max(300),
        }),
      ]),
    )
    .query(async ({ ctx, input }) => {
      const tmp = await ctx.db.query.blogs.findFirst({
        with: {
          author: true,
          skills: {
            with: {
              skill: true,
            },
          },
        },
        where(fields, { eq }) {
          if ("id" in input) {
            return eq(fields.id, input.id);
          } else {
            return eq(fields.slug, input.slug);
          }
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
  updateBlog: protectedProcedure
    .input(
      z.object({
        id: z.string().cuid2(),
        title: z.string().min(3).max(200).optional(),
        body: z.string().min(3).max(30_000).optional(),
      }),
    )
    .query(async ({ input, ctx }) => {
      const slug = input.title && slugify(input.title);
      const now = new Date();

      await ctx.db
        .update(blogs)
        .set({
          body: input.body,
          title: input.title,
          slug,
          updatedAt: now,
        })
        .where(and(eq(blogs.id, input.id), eq(blogs.authorId, ctx.user.id)));
    }),
  deleteBlog: protectedProcedure
    .input(
      z.object({
        id: z.string().cuid2(),
      }),
    )
    .query(async ({ input, ctx }) => {
      await ctx.db.delete(blogs).where(eq(blogs.id, input.id));
    }),
});
