import { mysqlTable, varchar } from "drizzle-orm/mysql-core";
import { plannedPayment } from "./plannedPayment";
import { label } from "./label";

export const plannedPaymentLabel = mysqlTable("planned_payment_label", {
  plannedPaymentId: varchar("planned_payment_id", { length: 255 }).references(
    () => plannedPayment.id
  ),
  labelId: varchar("label_id", { length: 255 }).references(() => label.id),
});
