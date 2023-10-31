import { env } from "~/env.mjs";
import type { users } from "../db/schema";
import jwt from "jsonwebtoken";

export type TokenData = {
  id: (typeof users.$inferSelect)["id"];
  type: (typeof users.$inferSelect)["type"];
};

export interface TokenDataRaw {
  _id: (typeof users.$inferSelect)["id"];
  type: (typeof users.$inferSelect)["type"];
}

export function generateUserToken(user: typeof users.$inferSelect) {
  const payload = {
    _id: user.id,
    type: user.type,
  };

  const token = jwt.sign(payload, env.SECRET_JWT, {
    expiresIn: "1 day",
  });

  return token;
}

export function verifyToken(
  token: string,
  userType?: NonNullable<(typeof users.$inferSelect)["type"]>,
) {
  try {
    const verified = jwt.verify(token, env.SECRET_JWT) as TokenDataRaw;
    if (userType && userType !== verified.type) {
      return null;
    }
    return { id: verified._id, type: verified.type };
  } catch (error) {
    return null;
  }
}
