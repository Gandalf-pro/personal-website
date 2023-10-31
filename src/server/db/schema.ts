// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { index, primaryKey, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { createdAtGen, getDefaultTableData, timestampGen } from "./helpers";
import { relations } from "drizzle-orm";

export const passwords = sqliteTable(
  "passwords",
  {
    userId: text("userId")
      .references(() => users.id, { onDelete: "cascade" })
      .notNull(),
    password: text("password").notNull(),
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
    email: text("email").unique().notNull(),
    name: text("name", { length: 256 }).notNull(),
    slug: text("slug").unique().notNull(),
    type: text("type", { enum: ["admin", "normal"] })
      .notNull()
      .default("normal"),
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
    name: text("name", { length: 256 }).notNull(),
    slug: text("slug").unique().notNull(),
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
    authorId: text("authorId")
      .references(() => users.id, {
        onDelete: "cascade",
      })
      .notNull(),
    title: text("title", { length: 256 }).notNull(),
    slug: text("slug").unique().notNull(),
    body: text("body").notNull(),
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
    blogId: text("blogId")
      .references(() => blogs.id, { onDelete: "cascade" })
      .notNull(),
    skillId: text("skillId")
      .references(() => skills.id, {
        onDelete: "cascade",
      })
      .notNull(),
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
