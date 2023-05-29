import {
  decimal,
  mysqlTable,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";
import { currencyEnum, paymentOptionsEnum, paymentTypeEnum } from "./enums";
import { account } from "./account";
import { category } from "./category";

export const template = mysqlTable("template", {
  id: varchar("id", { length: 255 }).primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  accountId: varchar("account_id", { length: 255 }).references(
    () => account.id
  ),
  categoryId: varchar("category_id", { length: 255 }).references(
    () => category.id
  ),
  amount: decimal("amount", { precision: 19, scale: 4 }).notNull(),
  type: paymentTypeEnum.notNull(),
  currency: currencyEnum.notNull(),
  payee: varchar("payee", { length: 255 }),
  note: varchar("note", { length: 255 }),
  paymentType: paymentOptionsEnum,
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
  userId: varchar("user_id", { length: 255 }).notNull(),
});
