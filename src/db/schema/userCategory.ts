import {
  mysqlTable,
  timestamp,
  uniqueIndex,
  varchar,
} from "drizzle-orm/mysql-core";
import { categoryNatureEnum } from "./enums";
import { category } from "./category";

export const userCategory = mysqlTable(
  "user_category",
  {
    id: varchar("id", { length: 255 }).primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    nature: categoryNatureEnum.notNull(),
    icon: varchar("icon", { length: 255 }),
    userId: varchar("user_id", { length: 255 }).notNull(),
    createdAt: timestamp("created_at"),
    categoryId: varchar("category_id", { length: 255 }).references(
      () => category.id
    ),
  },
  (table) => {
    return {
      categoryIdx: uniqueIndex("category_idx").on(table.categoryId),
    };
  }
);
