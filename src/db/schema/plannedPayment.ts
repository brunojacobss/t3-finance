import {
  boolean,
  int,
  mysqlTable,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";
import {
  confirmationTypeEnum,
  paymentOptionsEnum,
  paymentTypeEnum,
  plannedPaymentRepeatEnum,
} from "./enums";
import { account } from "./account";
import { category } from "./category";

export const plannedPayment = mysqlTable("planned_payment", {
  id: varchar("id", { length: 255 }).primaryKey(),
  type: paymentTypeEnum.notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  accountId: varchar("account_id", { length: 255 })
    .references(() => account.id)
    .notNull(),
  categoryId: varchar("category_id", { length: 255 })
    .references(() => category.id)
    .notNull(),
  userId: varchar("user_id", { length: 255 }).notNull(),
  confirmation: confirmationTypeEnum.notNull(),
  startDate: timestamp("start_date").notNull(),
  repeat: boolean("repeat").notNull(),
  repeatPeriod: plannedPaymentRepeatEnum,
  dayOfWeekRepeat: int("day_of_week_repeat"),
  dayOfMonthRepeat: int("day_of_month_repeat"),
  dateOfYearRepeat: timestamp("date_of_year_repeat"),
  paymentType: paymentOptionsEnum,
  payee: varchar("payee", { length: 255 }),
  note: varchar("note", { length: 255 }),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});
