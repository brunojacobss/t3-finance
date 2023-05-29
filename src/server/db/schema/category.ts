import {
  type AnyMySqlColumn,
  mysqlTable,
  varchar,
} from "drizzle-orm/mysql-core";
import { categoryNatureEnum } from "./enums";

export const category = mysqlTable("category", {
  id: varchar("id", { length: 255 }).primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  nature: categoryNatureEnum.notNull(),
  icon: varchar("icon", { length: 255 }),
  parentCategoryId: varchar("parent_category_id", { length: 255 }).references(
    (): AnyMySqlColumn => category.id
  ),
});
