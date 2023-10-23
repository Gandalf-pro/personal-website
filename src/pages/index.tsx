import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { type NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import AboutSection from "~/components/AboutSection";
import AppWrapper from "~/components/AppWrapper";
import ContactSection from "~/components/ContactSection";
import HomeLink from "~/components/HomeLink";
import { constantVariables } from "~/utils/constantVariables";

const Home: NextPage = () => {
  return (
    <AppWrapper className="pb-36">
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
      <AboutSection />
      <ContactSection />
    </AppWrapper>
  );
};

export default Home;
