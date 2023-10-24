import type { NextPage } from "next";
import ProjectDetailPageWrapper from "~/components/ProjectDetailPageWrapper";

const Medigalen: NextPage = () => {
  return (
    <ProjectDetailPageWrapper slug="medigalen">
      This project represented a visionary startup endeavor that, unfortunately,
      did not achieve its intended success. It aimed to establish a web platform
      facilitating the seamless connection between healthcare professionals and
      patients seeking online consultations.
      <br />
      <br />
      My role encompassed the complete development of the product, commencing
      with the construction of the backend infrastructure using Node.js and
      TypeScript, followed by the creation of the frontend using React. The
      database was powered by PostgreSQL.
      <br />
      <br />
      Within the backend domain, my primary focus revolved around the
      implementation of appointment scheduling, robust authentication
      mechanisms, diverse notification systems, and the deployment of a video
      conferencing solution to enable online medical meetings.
      <br />
      <br />
      On the frontend, we adopted a pre-designed template as our foundation, and
      my responsibilities included customizing and tailoring this template to
      suit our specific use case.
    </ProjectDetailPageWrapper>
  );
};

export default Medigalen;
