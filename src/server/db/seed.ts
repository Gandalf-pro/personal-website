import { db } from ".";
import { passwords, skills, users } from "~/server/db/schema";
import bcryptjs from "bcryptjs";
import technologiesData from "~/data/technologiesData";
import slugify from "slugify";

async function seedUser() {
  const email = "test@test.com";
  const password = "123456";

  const tmp = await db
    .insert(users)
    .values({
      email,
      type: "admin",
      name: "Özgür Sargut",
      slug: "ozgur-sargut",
    })
    .returning();

  const id = tmp.at(0)!.id;
  await db.insert(passwords).values({
    password: bcryptjs.hashSync(password),
    userId: id,
  });
}

async function seedSkills() {
  await db.insert(skills).values(
    technologiesData.map((val) => {
      return {
        name: val.name,
        slug: slugify(val.name, { lower: true }),
      };
    }),
  );
}

async function main() {
  console.time("Seed Time");
  await seedUser();
  await seedSkills();
  console.timeEnd("Seed Time");
}

void main();
