// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sqliteTable, text } from "drizzle-orm/sqlite-core";
import { getDefaultTableData, timestampGen } from "./helpers";

export const users = sqliteTable("users", {
  ...getDefaultTableData(),
  name: text("name", { length: 256 }),
  slug: text("slug").unique(),
  type: text("type", { enum: ["admin", "normal"] }),
});

export const skills = sqliteTable("skills", {
  ...getDefaultTableData(),
  name: text("name", { length: 256 }),
  slug: text("slug").unique(),
});

export const blogs = sqliteTable("blogs", {
  ...getDefaultTableData(),
  name: text("name", { length: 256 }),
  slug: text("slug").unique(),
  body: text("body"),
  updatedAt: timestampGen("updatedAt"),
});
