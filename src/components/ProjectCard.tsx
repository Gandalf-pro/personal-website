import { IconCaretRight } from "@tabler/icons-react";
import Link from "next/link";
import { type ProjectsDataType } from "~/data/projectsData";

const ProjectCard = ({
  description,
  name,
  slug,
  technologies,
}: ProjectsDataType) => {
  return (
    <div className="w-full rounded-xl bg-secondary p-3 shadow">
      <h3 className="mb-4 text-2xl font-extrabold">{name}</h3>
      <div className="flex">
        {technologies.map((val) => (
          <div
            key={val}
            className="rounded-full bg-slate-700/70 px-2 py-1 text-sm"
          >
            {val}
          </div>
        ))}
      </div>
      <div className="mb-5 mt-2 text-justify">{description}</div>
      <Link
        href={`/projects/${slug}`}
        className="w-full inline-flex items-center justify-center gap-2 rounded-lg border-2 border-pink-600 px-4 py-1 text-lg shadow-sm shadow-pink-600 transition-colors hover:bg-gradient-to-br hover:from-pink-600 hover:to-red-600"
      >
        Learn More <IconCaretRight className="h-7 w-7" />
      </Link>
    </div>
  );
};

export default ProjectCard;
