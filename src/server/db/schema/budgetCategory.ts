import { mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const budgetCategory = mysqlTable("budget_category", {
  categoryId: varchar("category_id", { length: 255 }).notNull(),
  budgetId: varchar("budget_id", { length: 255 }).notNull(),
});
