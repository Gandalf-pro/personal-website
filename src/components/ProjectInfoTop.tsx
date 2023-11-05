import { memo } from "react";
import { type ProjectsDataType } from "~/data/projectsData";
import TechnologiesShowcase from "./TechnologiesShowcase";

export interface ProjectInfoTopProps {
  data: ProjectsDataType;
}

const ProjectInfoTop = ({ data }: ProjectInfoTopProps) => {
  return (
    <section className="container mx-auto mt-8 px-2 sm:px-0">
      <h1 className="text-5xl font-extrabold">{data.name}</h1>
      <div className="mt-5 flex flex-row gap-2 overflow-x-auto">
        {data.technologies.map((val) => (
          <TechnologiesShowcase text={val} key={val} />
        ))}
      </div>
      <div>
        <h2 className="mt-3 text-2xl font-semibold">✨ What Is This?</h2>
        <div>{data.description}</div>
      </div>
    </section>
  );
};

export default memo(ProjectInfoTop);
