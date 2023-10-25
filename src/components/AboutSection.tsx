import React, { useState } from "react";
import Technologies from "./Technologies";
import HomeSection from "./HomeSection";
import TechnologiesDetailedView from "./TechnologiesDetailedView";

const AboutSection = () => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  return (
    <HomeSection title="🚀 About" id="about">
      <Technologies disableHeader />
      <div className="mt-3">
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
      {isDetailsOpen ? (
        <TechnologiesDetailedView className="mt-3" />
      ) : (
        <button
          className="mt-3 rounded border-2 border-pink-600 px-2 py-1 text-xl font-semibold transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-pink-600/70"
          onClick={() => {
            setIsDetailsOpen(true);
          }}
        >
          See Skills Categorized
        </button>
      )}
    </HomeSection>
  );
};

export default AboutSection;
