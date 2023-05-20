import { IconRobot } from "@tabler/icons-react";
import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Fira_Sans } from "next/font/google";

const firaFont = Fira_Sans({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`min-h-screen font-sans text-white ${firaFont.variable}`}
      >
        <div className="absolute -z-10 h-screen w-screen">
          <Image
            src="/bg-new.png"
            alt="Roses as background"
            fill
            style={{ objectFit: "cover" }}
            // quality={100}
          />
        </div>
        <div className="container mx-auto flex px-4 text-xl">
          <Link
            href="/"
            className="inline-flex items-center justify-center font-semibold"
          >
            <IconRobot size={24} />
            <span>Home</span>
          </Link>
          <div>
            <Link
              href="/about"
              className="inline-flex items-center justify-center font-semibold"
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center font-semibold"
            >
              Blogs
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center font-semibold"
            >
              Blogs
            </Link>
          </div>
        </div>
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Özgür Sargut
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8"></div>
        </div>
      </main>
    </>
  );
};

export default Home;
