import { blogRouter } from "~/server/api/routers/blog";
import { createTRPCRouter } from "~/server/api/trpc";
import { authRouter } from "./routers/auth";
import { skillsRouter } from "./routers/skills";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  blogs: blogRouter,
  auth: authRouter,
  skills: skillsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
