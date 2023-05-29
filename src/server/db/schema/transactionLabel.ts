import { mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const transactionLabel = mysqlTable("transaction_label", {
  transactionId: varchar("id", { length: 255 }).notNull(),
  labelId: varchar("id", { length: 255 }).notNull(),
});
