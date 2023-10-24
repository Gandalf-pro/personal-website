import type { NextPage } from "next";
import Link from "next/link";
import AppWrapper from "~/components/AppWrapper";
import ProjectCard from "~/components/ProjectCard";
import { projectsData } from "~/data/projectsData";
import { constantVariables } from "~/utils/constantVariables";
import { motion } from "framer-motion";

const Projects: NextPage = () => {
  return (
    <AppWrapper>
      <motion.section
        initial={{ y: "-50%", opacity: 0.6 }}
        animate={{ y: "0", opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="container mx-auto mt-8 px-2 sm:px-0"
      >
        <h1 className="text-5xl font-extrabold">📦 Projects</h1>
        <p className="mt-7">
          Please note that I am unable to share most of my projects due to
          non-disclosure agreements (NDAs). But here are some fun projects
          nonetheless. If you would like more information or have specific
          questions, please don&apos;t hesitate to{" "}
          <Link
            href={`mailto:${constantVariables.emailAddress}`}
            className="underline"
          >
            reach out
          </Link>{" "}
          to me.
        </p>
      </motion.section>
      <section className="container mx-auto mt-8 grid grid-cols-1 gap-3 px-2 sm:grid-cols-2 sm:px-0">
        {projectsData.map((val, i) => (
          <motion.div
            key={val.slug}
            initial={{ x: `${i % 2 === 0 ? "-" : ""}50%`, opacity: 0.6 }}
            animate={{ x: "0", opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75, delay: i / 50 }}
          >
            <ProjectCard {...val} />
          </motion.div>
        ))}
      </section>
    </AppWrapper>
  );
};

export default Projects;
