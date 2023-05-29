import { mysqlTable, varchar } from "drizzle-orm/mysql-core";
import { category } from "./category";
import { budget } from "./budget";

export const budgetCategory = mysqlTable("budget_category", {
  categoryId: varchar("category_id", { length: 255 }).references(
    () => category.id
  ),
  budgetId: varchar("budget_id", { length: 255 }).references(() => budget.id),
});
