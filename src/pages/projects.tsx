import type { NextPage } from "next";
import AppWrapper from "~/components/AppWrapper";
import ProjectCard from "~/components/ProjectCard";
import { projectsData } from "~/data/projectsData";

const Projects: NextPage = () => {
  return (
    <AppWrapper>
      <section className="container mx-auto mt-8 px-2 sm:px-0">
        <h1 className="text-5xl font-extrabold">📦 Projects</h1>
        <p className="mt-7">
          Please note that I am unable to share most of my projects due to
          non-disclosure agreements (NDAs). If you would like more information
          or have specific questions, please don&apos;t hesitate to reach out to
          me.
        </p>
      </section>
      <section className="container mx-auto mt-8 px-2 sm:px-0 grid sm:grid-cols-2 grid-cols-1 gap-3">
        {projectsData.map((val) => (
          <ProjectCard {...val} key={val.slug} />
        ))}
      </section>
    </AppWrapper>
  );
};

export default Projects;
