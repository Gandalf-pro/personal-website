import type { NextPage } from "next";
import ProjectDetailPageWrapper from "~/components/ProjectDetailPageWrapper";

const CouncilPlus: NextPage = () => {
  return (
    <ProjectDetailPageWrapper slug="council-plus">
      This project entailed serving a prominent London council with the crucial
      task of optimizing council operations. The application was designed to
      foster efficiency, both internally among council employees and externally
      in interactions with the local community. Notable functionalities included
      the ability for citizens to report missing trash, council members to
      initiate tasks across various departments.
      <br />
      <br />
      I was entrusted with the task of taking over a project that was halfway
      complete, and my role was to bring it to successful fruition. On the
      frontend(vue.js), I meticulously resolved issues pertaining to
      permissions, ensuring that users could only access screens that were
      relevant to their roles. Furthermore, I expanded the software&apos;s
      capabilities by introducing new sections to enhance its utility.
      <br />
      <br />
      On the mobile front, I meticulously developed and integrated mobile
      stores, thus improving the user experience and making the application more
      user-friendly on mobile devices.
      <br />
      <br />
      In the backend side(expressjs with javascript), I tackled intricate
      database transaction and migration issues and introduced features to
      define geographical boundaries and incorporate map files. I also addressed
      permissions issues in a thorough manner, granting users within different
      departmental hierarchies appropriate access to tasks.
      <br />
      <br />
      In summary, I played a pivotal role in completing this project by
      enhancing and extending the functionalities of its frontend, mobile, and
      backend components. This led to the creation of a secure, efficient, and
      professional council management system that met the project&apos;s
      parameters.
    </ProjectDetailPageWrapper>
  );
};

export default CouncilPlus;
