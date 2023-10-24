import React, { memo } from "react";
import { projectsData } from "~/data/projectsData";
import TechnologiesShowcase from "./TechnologiesShowcase";

export interface ProjectInfoTopProps {
  slug: string;
}

const ProjectInfoTop = ({ slug }: ProjectInfoTopProps) => {
  const data = projectsData.find((val) => val.slug === slug);

  if (!data) {
    return <>Cant Find Data</>;
  }

  return (
    <section className="container mx-auto mt-8 px-2 sm:px-0">
      <h1 className="text-5xl font-extrabold">{data.name}</h1>
      <div className="mt-5 flex flex-row gap-2 overflow-x-auto">
        {data.technologies.map((val) => (
          <TechnologiesShowcase text={val} key={val} />
        ))}
      </div>
      <div>
        <h2 className="mt-3 text-2xl font-semibold">✨ Summary</h2>
        <div>{data.description}</div>
      </div>
    </section>
  );
};

export default memo(ProjectInfoTop);
