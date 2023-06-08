import { mysqlTable, varchar } from "drizzle-orm/mysql-core";
import { budgetStatusEnum } from "./enums";

export const budgetPeriod = mysqlTable("budget_period", {
  id: varchar("id", { length: 255 }).primaryKey(),
  budgetId: varchar("budget_id", { length: 255 }).notNull(),
  status: budgetStatusEnum.notNull(),
});
