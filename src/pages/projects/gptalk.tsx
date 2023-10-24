import type { NextPage } from "next";
import ProjectDetailPageWrapper from "~/components/ProjectDetailPageWrapper";

const Gptalk: NextPage = () => {
  return (
    <ProjectDetailPageWrapper slug="gptalk">
      I was actively involved in the development of the backend and Chrome
      extension components for an AI-powered chat application, accessible via
      the following link: https://gptalk.co. My primary responsibility
      encompassed the deployment and hosting of the application, which I
      efficiently executed by leveraging Kubernetes on the Digital Ocean
      platform.
      <br />
      <br />
      For the backend(Nodejs, Typescript), I implemented streaming responses
      from OpenAI to cater to the needs of our diverse client base, including
      iOS users and extension users. Furthermore, I played a pivotal role in the
      creation and refinement of a wide array of AI prompts designed to enhance
      the application's functionality. These prompts covered various aspects
      such as summarization, tone analysis, text length adjustments, and
      language translations, all facilitated by our AI capabilities.
      <br />
      <br />
      Additionally, I contributed to the development of distinct AI actors, each
      possessing unique conversational characteristics. This comprehensive
      approach aimed to provide our users with a more personalized and engaging
      chat experience.
    </ProjectDetailPageWrapper>
  );
};

export default Gptalk;
