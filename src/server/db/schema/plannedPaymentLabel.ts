import { mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const plannedPaymentLabel = mysqlTable("planned_payment_label", {
  plannedPaymentId: varchar("planned_payment_id", { length: 255 }).notNull(),
  labelId: varchar("label_id", { length: 255 }).notNull(),
});
