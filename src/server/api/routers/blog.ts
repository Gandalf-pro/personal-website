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
});
