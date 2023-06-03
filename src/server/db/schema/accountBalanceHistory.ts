import {
  decimal,
  mysqlTable,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";

export const accountBalanceHistory = mysqlTable("account_balance_history", {
  id: varchar("id", { length: 255 }).primaryKey(),
  accountId: varchar("account_id", { length: 255 }).notNull(),
  balance: decimal("balance", { precision: 19, scale: 4 }).notNull(),
  date: timestamp("date").notNull(),
  lastTransactionId: varchar("last_transaction_id", { length: 255 }),
});
