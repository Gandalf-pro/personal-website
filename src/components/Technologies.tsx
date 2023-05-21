import React from "react";
import TechnologiesShowcase from "./TechnologiesShowcase";
import * as ScrollArea from "@radix-ui/react-scroll-area";

const technologies = [
  "Typescript",
  "Javascript",
  "Nodejs",
  "Kubernetes",
  "Postgresql",
  "Reactjs",
  "Express",
  "Prisma",
  "Html",
  "Css",
  "Js",
  "Vue",
  "Nextjs",
  "Tailwind",
  "Bootstrap",
  "Linux",
  "Python",
  "Flask",
  "C+",
  "Iot",
  "Java",
  "Rust",
];

const Technologies = () => {
  const techComponent = technologies.map((tech) => (
    <TechnologiesShowcase text={tech} key={tech} />
  ));
  return (
    <div className="container mx-auto mt-4 h-96">
      <h3 className="text-5xl font-bold">Technologies</h3>
      <div className="mt-4 overflow-x-clip">
        <div className="flex-container flex flex-row gap-4">
          {techComponent}
          {techComponent}
          {techComponent}
          {techComponent}
          {techComponent}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
