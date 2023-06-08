import { mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const budgetAccount = mysqlTable("budget_account", {
  account_id: varchar("account_id", { length: 255 }).notNull(),
  budget_id: varchar("budget_id", { length: 255 }).notNull(),
});
