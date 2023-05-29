import { mysqlTable, timestamp, varchar } from "drizzle-orm/mysql-core";

export const label = mysqlTable("label", {
  id: varchar("id", { length: 255 }).primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  color: varchar("color", { length: 255 }),
  createdAt: timestamp("created_at"),
});
