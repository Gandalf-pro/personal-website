import React from "react";
import Technologies from "./Technologies";
import HomeSection from "./HomeSection";

const AboutSection = () => {
  return (
    <HomeSection title="🚀 About" id="about">
      <div>
        As a software engineer with expertise in AI and full-stack development,
        I enjoy working on diverse and challenging projects that require me to
        learn new technologies and apply my skills in creative ways.
        <br />
        <br />I am an adaptable generalist who is comfortable with changing
        requirements and environments, and a passionate learner who is always
        eager to explore new tools and frameworks. My goal is to contribute to
        innovative and impactful software projects that can make a difference in
        the world.
        <br />
        <br />I graduated from Yaşar Üniversitesi with a Bachelor&apos;s degree
        in Software Engineering, where I gained a solid foundation in
        programming languages, software design, and data structures
        <br />
        <br />
        Currently, I am a Software Engineer at App Empires, where I use React,
        Nextjs, Typescript, React Native, RabbitMQ, Redis, Aws, Digital Ocean,
        Sqs, Ai, Python, Kubernetes, and Microservices to build scalable and
        reliable web applications that serve our user base.
      </div>
      <Technologies />
    </HomeSection>
  );
};

export default AboutSection;
