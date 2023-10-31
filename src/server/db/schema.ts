// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { index, primaryKey, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { createdAtGen, getDefaultTableData, timestampGen } from "./helpers";
import { relations } from "drizzle-orm";

export const passwords = sqliteTable(
  "passwords",
  {
    userId: text("userId").references(() => users.id, { onDelete: "cascade" }),
    password: text("password"),
    createdAt: createdAtGen(),
  },
  (table) => {
    return {
      userIdx: index("passwordsUserIdx").on(table.userId),
    };
  },
);

export const users = sqliteTable(
  "users",
  {
    ...getDefaultTableData(),
    email: text("email").unique(),
    name: text("name", { length: 256 }),
    slug: text("slug").unique(),
    type: text("type", { enum: ["admin", "normal"] }),
  },
  (table) => {
    return {
      slugIdx: index("usersSlugIdx").on(table.slug),
    };
  },
);

export const usersRelation = relations(users, ({ many }) => ({
  passwords: many(passwords),
  blogs: many(blogs),
}));

export const skills = sqliteTable(
  "skills",
  {
    ...getDefaultTableData(),
    name: text("name", { length: 256 }),
    slug: text("slug").unique(),
  },
  (table) => {
    return {
      slugIdx: index("skillsSlugIdx").on(table.slug),
    };
  },
);

export const skillsRelation = relations(skills, ({ many }) => ({
  skills: many(blogsSkillsJoin),
}));

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
      slugIdx: index("blogsSlugIdx").on(table.slug),
    };
  },
);

export const blogsRelation = relations(blogs, ({ one, many }) => ({
  author: one(users, {
    fields: [blogs.authorId],
    references: [users.id],
  }),
  skills: many(blogsSkillsJoin),
}));

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

export const blogsSkillsJoinRelation = relations(
  blogsSkillsJoin,
  ({ one }) => ({
    blog: one(blogs, {
      fields: [blogsSkillsJoin.blogId],
      references: [blogs.id],
    }),
    skill: one(skills, {
      fields: [blogsSkillsJoin.skillId],
      references: [skills.id],
    }),
  }),
);
