import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { db } from "~/server/db";
import { userCategory } from "~/server/db/schema/userCategory";
import { v4 as uuidv4 } from "uuid";
import { category } from "~/server/db/schema/category";
import { eq } from "drizzle-orm";
import { z } from "zod";

export const userCategoryRouter = createTRPCRouter({
  getCategories: privateProcedure.query(async ({ ctx }) => {
    const userId = ctx.userId;
    return await db
      .select()
      .from(userCategory)
      .where(eq(userCategory.userId, userId));
  }),
  getCagegoriesByUserId: publicProcedure
    .input(z.object({ userId: z.string() }))
    .query(async ({ input }) => {
      return await db
        .select()
        .from(userCategory)
        .where(eq(userCategory.userId, input.userId));
    }),

  populateCategories: privateProcedure.mutation(async ({ ctx }) => {
    const userId = ctx.userId;
    const categories = await db.select().from(category);
    const categoriesToPopulate = categories.map((category) => {
      return { ...category, id: uuidv4(), userId };
    });

    return db.insert(userCategory).values(categoriesToPopulate);
  }),
});
