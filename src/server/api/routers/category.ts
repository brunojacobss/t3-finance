import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { db } from "~/server/db";
import { category } from "~/server/db/schema/category";

export const categoryRouter = createTRPCRouter({
  getCategories: publicProcedure.query(() => {
    return db.select().from(category);
  }),
});
