// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { index, primaryKey, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { getDefaultTableData, timestampGen } from "./helpers";

export const users = sqliteTable(
  "users",
  {
    ...getDefaultTableData(),
    name: text("name", { length: 256 }),
    slug: text("slug").unique(),
    type: text("type", { enum: ["admin", "normal"] }),
  },
  (table) => {
    return {
      slugIdx: index("slugIdx").on(table.slug),
    };
  },
);

export const skills = sqliteTable(
  "skills",
  {
    ...getDefaultTableData(),
    name: text("name", { length: 256 }),
    slug: text("slug").unique(),
  },
  (table) => {
    return {
      slugIdx: index("slugIdx").on(table.slug),
    };
  },
);

export const blogs = sqliteTable(
  "blogs",
  {
    ...getDefaultTableData(),
    authorId: text("authorId").references(() => users.id, {
      onDelete: "cascade",
    }),
    title: text("title", { length: 256 }),
    slug: text("slug").unique(),
    body: text("body"),
    updatedAt: timestampGen("updatedAt"),
  },
  (table) => {
    return {
      authorIdx: index("authorIdx").on(table.authorId),
      slugIdx: index("slugIdx").on(table.slug),
    };
  },
);

export const blogsSkillsJoin = sqliteTable(
  "blogsSkillsJoin",
  {
    blogId: text("blogId").references(() => blogs.id, { onDelete: "cascade" }),
    skillId: text("skillId").references(() => skills.id, {
      onDelete: "cascade",
    }),
  },
  (table) => {
    return {
      pk: primaryKey(table.blogId, table.skillId),
      blogIdx: index("blogIdx").on(table.blogId),
      skillIdx: index("skillIdx").on(table.skillId),
    };
  },
);
