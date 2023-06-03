import { mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const transactionLabel = mysqlTable("transaction_label", {
  transactionId: varchar("transaction_id", { length: 255 }).notNull(),
  labelId: varchar("label_id", { length: 255 }).notNull(),
});
