import { exampleRouter } from "~/server/api/routers/example";
import { createTRPCRouter } from "~/server/api/trpc";
import { categoryRouter } from "./routers/category";
import { userCategoryRouter } from "./routers/userCategory";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  category: categoryRouter,
  userCategory: userCategoryRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
