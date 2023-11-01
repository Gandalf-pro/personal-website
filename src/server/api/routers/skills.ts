import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const skillsRouter = createTRPCRouter({
  getSKills: protectedProcedure.query(async ({ ctx }) => {
    const tmp = await ctx.db.query.skills.findMany();

    return { skills: tmp };
  }),
});
