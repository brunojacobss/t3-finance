import { mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const templateLabel = mysqlTable("template_label", {
  templateId: varchar("template_id", { length: 255 }).notNull(),
  labelId: varchar("label_id", { length: 255 }).notNull(),
});
