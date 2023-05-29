import { mysqlTable, varchar } from "drizzle-orm/mysql-core";
import { template } from "./template";
import { label } from "./label";

export const templateLabel = mysqlTable("template_label", {
  templateId: varchar("template_id", { length: 255 }).references(
    () => template.id
  ),
  labelId: varchar("label_id", { length: 255 }).references(() => label.id),
});
