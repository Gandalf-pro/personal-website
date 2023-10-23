import {
  IconBrandGithub,
  IconBrandGithubFilled,
  IconBrandLinkedin,
  IconMail,
  IconMailFilled,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import AppWrapper from "~/components/AppWrapper";
import HomeLink from "~/components/HomeLink";
import Technologies from "~/components/Technologies";
import { constantVariables } from "~/utils/constantVariables";

const Home: NextPage = () => {
  return (
    <AppWrapper>
      <div className="fixed z-50 mx-auto flex h-20 w-full justify-around bg-gradient-to-b from-[#1f2733] to-[#1f2838] px-4 py-4 text-xl shadow shadow-pink-500">
        <Link
          href="/"
          className="inline-flex items-center justify-center font-semibold underline drop-shadow"
        >
          <span>Home</span>
        </Link>
        <Link
          href="/about"
          className="inline-flex items-center justify-center font-semibold underline drop-shadow"
        >
          Projects
        </Link>
        <Link
          href="/blog"
          className="inline-flex items-center justify-center font-semibold underline drop-shadow"
        >
          Blog
        </Link>
      </div>
      <div className="grid grid-cols-12 items-center overflow-x-hidden pt-20">
        <motion.div
          initial={{ x: "-50%", opacity: 0.6 }}
          animate={{ x: "0", opacity: 1 }}
          transition={{ ease: "anticipate", duration: 2 }}
          className="relative col-span-5 hidden h-screen w-full sm:block"
        >
          <Image
            src="/bg-new-left.png"
            alt="Roses as background"
            fill
            style={{ objectFit: "fill" }}
          />
        </motion.div>
        <div className="col-span-6 px-4 text-center text-white sm:col-span-4">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Hi!✋
            <br />
            I&apos;m Özgür Sargut
            <br />A Software Engineer 💻
          </h1>
          <div className="mt-4 inline-flex items-center justify-center gap-4">
            <HomeLink
              href={`mailto:${constantVariables.emailAddress}`}
              Icon={IconMail}
            />
            <HomeLink
              href={constantVariables.githubUrl}
              Icon={IconBrandGithub}
            />
            <HomeLink
              href={constantVariables.linkedInUrl}
              Icon={IconBrandLinkedin}
            />
          </div>
        </div>
        <motion.div
          initial={{ x: "50%", opacity: 0.6 }}
          animate={{ x: "0", opacity: 1 }}
          transition={{ ease: "anticipate", duration: 2 }}
          className="relative col-span-6 h-screen w-full sm:col-span-3"
        >
          <Image
            src="/bg-new-right.png"
            alt="Roses as background"
            fill
            style={{ objectFit: "fill" }}
          />
        </motion.div>
      </div>
      <Technologies />
    </AppWrapper>
  );
};

export default Home;
