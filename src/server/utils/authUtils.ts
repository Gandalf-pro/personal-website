import { env } from "~/env.mjs";
import type { users } from "../db/schema";
import jwt from "jsonwebtoken";
import { GetServerSidePropsContext, NextApiRequest } from "next";
import { IncomingMessage } from "http";

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

function parseCookies(request: IncomingMessage) {
  const list: Record<string, string | undefined> = {};
  const cookieHeader = request.headers?.cookie;
  if (!cookieHeader) return list;

  cookieHeader.split(`;`).forEach(function (cookie) {
    // eslint-disable-next-line prefer-const
    let [name, ...rest] = cookie.split(`=`);
    name = name?.trim();
    if (!name) return;
    const value = rest.join(`=`).trim();
    if (!value) return;
    list[name] = decodeURIComponent(value);
  });

  return list;
}

function getTokenFromCookie(
  req: GetServerSidePropsContext["req"] | IncomingMessage,
) {
  return "cookies" in req
    ? req.cookies["auth-token"]
    : parseCookies(req)["auth-token"];
}

export const getServerUser = (
  req: GetServerSidePropsContext["req"] | IncomingMessage | NextApiRequest,
) => {
  const token = req.headers.authorization ?? getTokenFromCookie(req);
  if (!token) return null;
  // Parse the token
  return verifyToken(token);
};
