import type { NextApiRequest, NextApiResponse } from "next";
import { env } from "~/env.mjs";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ResponseData = {
  message: string;
};

async function sendMailToDiscord(msg: string) {
  if (!env.DISCORD_WEBHOOK_URL) {
    return;
  }
  const res = await fetch(env.DISCORD_WEBHOOK_URL, {
    method: "POST",
    body: JSON.stringify({
      content: msg,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error();
  }
}

function getSplitMessage(msg: string) {
  let middle = Math.floor(msg.length / 2);
  const before = msg.lastIndexOf(" ", middle);
  const after = msg.indexOf(" ", middle + 1);

  if (middle - before < after - middle) {
    middle = before;
  } else {
    middle = after;
  }

  return [msg.substring(0, middle), msg.substring(middle + 1)] as const;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  if (req.method !== "POST") {
    return res.status(405);
  }
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { name, email, message } = req.body;

    if (
      !name ||
      typeof name !== "string" ||
      name.length < 3 ||
      name.length > 50
    ) {
      return res.status(400).json({ message: "Name is needed" });
    }
    if (
      !email ||
      typeof email !== "string" ||
      email.length < 3 ||
      email.length > 60 ||
      !emailRegex.test(email)
    ) {
      return res.status(400).json({ message: "Email is needed" });
    }
    if (
      !message ||
      typeof message !== "string" ||
      message.length < 3 ||
      message.length > 3000
    ) {
      return res.status(400).json({ message: "Message is needed" });
    }

    if (message.length > 1600) {
      const split = getSplitMessage(message);
      await sendMailToDiscord(`${name} - ${email}\n${split[0]}`);
      await sendMailToDiscord(split[1]);
    } else {
      await sendMailToDiscord(`${name} - ${email}\n${message}`);
    }

    res
      .status(200)
      .json({ message: "Received your message! Thank you for reaching out." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "There was an error." });
  }
}
