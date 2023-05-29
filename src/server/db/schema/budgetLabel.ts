import { mysqlTable, varchar } from "drizzle-orm/mysql-core";
import { label } from "./label";
import { budget } from "./budget";

export const budgetLabel = mysqlTable("budget_label", {
  label_id: varchar("label_id", { length: 255 }).references(() => label.id),
  budget_id: varchar("budget_id", { length: 255 }).references(() => budget.id),
});
