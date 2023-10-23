import { motion } from "framer-motion";
import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import AppWrapper from "~/components/AppWrapper";
import Technologies from "~/components/Technologies";

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
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Özgür Sargut
          </h1>
          <div className="mt-4 w-full text-xl opacity-75 sm:text-3xl">
            FullStack-Developer
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
