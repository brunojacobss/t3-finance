import {
  decimal,
  mysqlTable,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";
import { paymentOptionsEnum, transactionTypeEnum } from "./enums";

export const transaction = mysqlTable("transaction", {
  id: varchar("id", { length: 255 }).primaryKey(),
  type: transactionTypeEnum,
  amount: decimal("amount", { precision: 19, scale: 4 }).notNull(),
  accountId: varchar("account_id", { length: 255 }).notNull(),
  categoryId: varchar("category_id", { length: 255 }).notNull(),
  date: timestamp("date").notNull(),
  note: varchar("note", { length: 255 }),
  paymentOptionsEnum: paymentOptionsEnum.notNull(),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
  userId: varchar("user_id", { length: 255 }).notNull(),
});
