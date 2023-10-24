import { type PropsWithChildren } from "react";
import AppWrapper from "./AppWrapper";
import ProjectInfoTop from "./ProjectInfoTop";

export interface ProjectDetailPageWrapperProps extends PropsWithChildren {
  slug: string;
}

const ProjectDetailPageWrapper = ({
  slug,
  children,
}: ProjectDetailPageWrapperProps) => {
  return (
    <AppWrapper>
      <ProjectInfoTop slug={slug} />
      <section className="container mx-auto mt-8 px-2 text-justify sm:px-0">
        <h2 className="mt-3 text-2xl font-semibold">🔍 Project</h2>
        {children}
      </section>
    </AppWrapper>
  );
};

export default ProjectDetailPageWrapper;
