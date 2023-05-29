import {
  decimal,
  mysqlTable,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";
import { budgetPeriodEnum } from "./enums";

export const budget = mysqlTable("budget", {
  id: varchar("id", { length: 255 }).primaryKey(),
  amount: decimal("balance", { precision: 19, scale: 4 }).notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  period: budgetPeriodEnum.notNull(),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
  userId: varchar("user_id", { length: 255 }).notNull(),
});
