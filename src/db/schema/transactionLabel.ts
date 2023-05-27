import { mysqlTable, varchar } from "drizzle-orm/mysql-core";
import { transaction } from "./transaction";
import { label } from "./label";

export const transactionLabel = mysqlTable("transaction_label", {
  transactionId: varchar("id", { length: 255 }).references(
    () => transaction.id
  ),
  labelId: varchar("id", { length: 255 }).references(() => label.id),
});
