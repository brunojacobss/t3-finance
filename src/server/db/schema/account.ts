import {
  decimal,
  int,
  mysqlTable,
  timestamp,
  uniqueIndex,
  varchar,
} from "drizzle-orm/mysql-core";
import { accountTypeEnum, currencyEnum } from "./enums";

export const account = mysqlTable(
  "account",
  {
    id: varchar("id", { length: 255 }).primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    balance: decimal("balance", { precision: 19, scale: 4 }).notNull(),
    currency: currencyEnum.notNull(),
    type: accountTypeEnum.notNull(),
    number: int("account_number"),
    createdAt: timestamp("created_at"),
    updatedAt: timestamp("updated_at"),
    userId: varchar("user_id", { length: 255 }).notNull(),
  },
  (table) => {
    return {
      userIdx: uniqueIndex("user_idx").on(table.userId),
    };
  }
);
