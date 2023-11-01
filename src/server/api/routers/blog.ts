import { TRPCError } from "@trpc/server";
import { and, eq } from "drizzle-orm";
import sanitizeHtml from "sanitize-html";
import slugify from "slugify";
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { blogs, blogsSkillsJoin } from "~/server/db/schema";

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
        where(fields, { eq, and }) {
          const authorEq = input?.authorId
            ? eq(fields.authorId, input.authorId)
            : undefined;
          const activeEq = eq(fields.active, true);
          return and(activeEq, authorEq);
        },
      });

      return { blogs: tmp };
    }),
  getListOfBlogsPrivate: protectedProcedure.query(async ({ ctx }) => {
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
        return eq(fields.authorId, ctx.user.id);
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
          id: z.string().cuid2(),
          title: z.string().min(3).max(200).optional(),
          body: z
            .string()
            .min(3)
            .max(30_000)
            .optional()
            .transform((val) => {
              if (!val) {
                return;
              }
              return sanitizeHtml(val);
            }),
          active: z.boolean().optional(),
          skillIds: z.array(z.string().cuid2()).max(200).optional(),
        }),
        z.object({
          title: z.string().min(3).max(200),
          body: z
            .string()
            .min(3)
            .max(30_000)
            .transform((val) => sanitizeHtml(val)),
          active: z.boolean().default(true),
          skillIds: z.array(z.string().cuid2()).max(200),
        }),
      ]),
    )
    .mutation(async ({ input, ctx }) => {
      const slug = input.title && slugify(input.title, { lower: true });
      const now = new Date();

      if ("id" in input) {
        const id = await ctx.db.transaction(async (tx) => {
          const resInternal = await tx
            .update(blogs)
            .set({
              body: input.body,
              title: input.title,
              active: input.active,
              slug,
              updatedAt: now,
            })
            .where(and(eq(blogs.id, input.id), eq(blogs.authorId, ctx.user.id)))
            .returning({
              id: blogs.id,
            });

          const blogId = resInternal.at(0)?.id;
          if (!blogId) {
            throw new TRPCError({
              code: "INTERNAL_SERVER_ERROR",
            });
          }

          if (input.skillIds) {
            // First remove all the skill connections
            await tx
              .delete(blogsSkillsJoin)
              .where(eq(blogsSkillsJoin.blogId, blogId));
            // Then remake them
            if (input.skillIds.length) {
              await tx.insert(blogsSkillsJoin).values(
                input.skillIds.map((id) => {
                  return { blogId, skillId: id };
                }),
              );
            }
          }

          return blogId;
        });

        return { id };
      } else {
        const id = await ctx.db.transaction(async (tx) => {
          const resInternal = await tx
            .insert(blogs)
            .values({
              authorId: ctx.user.id,
              body: input.body,
              title: input.title,
              active: input.active,
              slug: slug!,
              createdAt: now,
              updatedAt: now,
            })
            .returning({
              id: blogs.id,
            });

          const blogId = resInternal.at(0)?.id;
          if (!blogId) {
            throw new TRPCError({
              code: "INTERNAL_SERVER_ERROR",
            });
          }

          if (input.skillIds.length) {
            await tx.insert(blogsSkillsJoin).values(
              input.skillIds.map((id) => {
                return { blogId, skillId: id };
              }),
            );
          }

          return blogId;
        });

        return { id };
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
