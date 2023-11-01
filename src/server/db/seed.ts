import { db } from ".";
import { passwords, users } from "~/server/db/schema";
import bcryptjs from "bcryptjs";

async function main() {
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

void main();
