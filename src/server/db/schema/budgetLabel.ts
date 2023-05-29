import { mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const budgetLabel = mysqlTable("budget_label", {
  label_id: varchar("label_id", { length: 255 }).notNull(),
  budget_id: varchar("budget_id", { length: 255 }).notNull(),
});
