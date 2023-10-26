import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { type NextPage } from "next";
import Image from "next/image";
import AboutSection from "~/components/AboutSection";
import AppWrapper from "~/components/AppWrapper";
import ContactSection from "~/components/ContactSection";
import HomeLink from "~/components/HomeLink";
import { constantVariables } from "~/utils/constantVariables";

const Home: NextPage = () => {
  return (
    <AppWrapper className="pb-32">
      <div className="grid grid-cols-12 items-center overflow-hidden">
        <motion.div
          initial={{ x: "-50%", rotate: -25, opacity: 0.6 }}
          animate={{ x: "0", rotate: 0, opacity: 1 }}
          transition={{ ease: "anticipate", duration: 2 }}
          className="absolute col-span-5 h-screen w-full sm:relative"
        >
          <Image
            src="/bg-new-left.png"
            alt="Roses as background"
            className="opacity-25 sm:opacity-100"
            fill
            style={{ objectFit: "fill" }}
          />
        </motion.div>
        <motion.div
          initial={{ y: "180%", opacity: 0.6 }}
          animate={{ y: "0", opacity: 1 }}
          transition={{ ease: "anticipate", duration: 2 }}
          className="z-10 col-span-8 col-start-3 mt-24 px-4 text-center text-white sm:col-span-4 sm:col-start-auto sm:mt-0"
        >
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
        </motion.div>
        <div className="hidden h-screen w-full sm:col-span-3 sm:block">
          <motion.div
            initial={{ x: "50%", rotate: 25, opacity: 0.6 }}
            animate={{ x: "0", rotate: 0, opacity: 1 }}
            transition={{ ease: "anticipate", duration: 2 }}
            className="relative h-full w-full"
          >
            <Image
              src="/bg-new-right.png"
              alt="Roses as background"
              fill
              style={{ objectFit: "fill" }}
            />
          </motion.div>
        </div>
      </div>
      <AboutSection />
      <ContactSection />
    </AppWrapper>
  );
};

export default Home;
