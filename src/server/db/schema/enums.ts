import { mysqlEnum } from "drizzle-orm/mysql-core";

export const paymentTypeEnum = mysqlEnum("payment_type", ["income", "expense"]);
export const accountTypeEnum = mysqlEnum("account_type", [
  "savings_account",
  "checking_account",
  "credit_card",
  "cash",
  "insurance",
  "investment",
  "loan",
  "mortgage",
  "general",
]);
export const currencyEnum = mysqlEnum("currency", ["pen", "usd", "eur"]);
export const categoryNatureEnum = mysqlEnum("category_nature", [
  "must",
  "need",
  "want",
]);
export const budgetPeriodEnum = mysqlEnum("budget_period", [
  "weekly",
  "monthly",
  "yearly",
  "one-time",
]);
export const transactionTypeEnum = mysqlEnum("transaction_type", [
  "expense",
  "income",
  "transfer",
]);
export const paymentOptionsEnum = mysqlEnum("payment_options", [
  "cash",
  "debit_card",
  "credit_card",
  "bank_transfer",
  "e_wallet",
]);
export const confirmationTypeEnum = mysqlEnum("confirmation_type", [
  "manual",
  "automatic",
]);
export const plannedPaymentRepeatEnum = mysqlEnum("plannet_payment_repeat", [
  "day",
  "week",
  "month",
  "year",
]);
export const budgetStatusEnum = mysqlEnum("budget_status", [
  "in_limit",
  "overspent",
]);
