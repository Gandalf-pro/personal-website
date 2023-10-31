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
  getListOfBlogs: publicProcedure
    .input(
      z
        .object({
          authorId: z.string().cuid2().optional(),
        })
        .optional(),
    )
    .query(async ({ ctx, input }) => {
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
        where(fields, { eq }) {
          if (input?.authorId) {
            return eq(fields.authorId, input.authorId);
          }
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
  upsertBlog: protectedProcedure
    .input(
      z.union([
        z.object({
          title: z.string().min(3).max(200),
          body: z.string().min(3).max(30_000),
        }),
        z.object({
          id: z.string().cuid2(),
          title: z.string().min(3).max(200).optional(),
          body: z.string().min(3).max(30_000).optional(),
        }),
      ]),
    )
    .mutation(async ({ input, ctx }) => {
      const slug = input.title && slugify(input.title);
      const now = new Date();

      if ("id" in input) {
        const res = await ctx.db
          .update(blogs)
          .set({
            body: input.body,
            title: input.title,
            slug,
            updatedAt: now,
          })
          .where(and(eq(blogs.id, input.id), eq(blogs.authorId, ctx.user.id)))
          .returning({
            id: blogs.id,
          });

        return { id: res.at(0)!.id };
      } else {
        const res = await ctx.db
          .insert(blogs)
          .values({
            authorId: ctx.user.id,
            body: input.body,
            title: input.title,
            slug: slug!,
            createdAt: now,
            updatedAt: now,
          })
          .returning({
            id: blogs.id,
          });

        return { id: res.at(0)!.id };
      }
    }),
  deleteBlog: protectedProcedure
    .input(
      z.object({
        id: z.string().cuid2(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      await ctx.db.delete(blogs).where(eq(blogs.id, input.id));
    }),
});
