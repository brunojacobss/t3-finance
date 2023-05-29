import { mysqlTable, timestamp, varchar } from "drizzle-orm/mysql-core";
import { categoryNatureEnum } from "./enums";

export const userCategory = mysqlTable("user_category", {
  id: varchar("id", { length: 255 }).primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  nature: categoryNatureEnum.notNull(),
  icon: varchar("icon", { length: 255 }),
  userId: varchar("user_id", { length: 255 }).notNull(),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
  parentCategoryId: varchar("parent_category_id", { length: 255 }),
});
