import Link from "next/link";
import React from "react";
import { type ProjectsDataType } from "~/data/projectsData";

const ProjectCard = ({
  description,
  name,
  slug,
  technologies,
}: ProjectsDataType) => {
  return (
    <div className="w-full rounded-xl bg-secondary p-3">
      <h3 className="mb-4 text-xl font-bold">{name}</h3>
      <div className="flex">
        {technologies.map((val) => (
          <div key={val} className="rounded-full bg-slate-700/70 px-2 py-1">
            {val}
          </div>
        ))}
      </div>
      <div className="mb-3 mt-2">{description}</div>
      <Link href={`/projects/${slug}`} className="px-2 py-1 bg-">Learn More</Link>
    </div>
  );
};

export default ProjectCard;
