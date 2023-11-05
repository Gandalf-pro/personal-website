import { type PropsWithChildren } from "react";
import AppWrapper from "./AppWrapper";
import ProjectInfoTop from "./ProjectInfoTop";
import { projectsData } from "~/data/projectsData";

export interface ProjectDetailPageWrapperProps extends PropsWithChildren {
  slug: string;
}

const ProjectDetailPageWrapper = ({
  slug,
  children,
}: ProjectDetailPageWrapperProps) => {
  const data = projectsData.find((val) => val.slug === slug);

  if (!data) {
    return <>Cant Find Data</>;
  }

  return (
    <AppWrapper
      title={`${data.name} | by Özgür Sargut`}
      description={data.description}
    >
      <ProjectInfoTop data={data} />
      <section className="container mx-auto mt-8 px-2 text-justify sm:px-0">
        <h2 className="mt-3 text-2xl font-semibold">🔍 Project</h2>
        {children}
      </section>
    </AppWrapper>
  );
};

export default ProjectDetailPageWrapper;
