type TechCategories = "mobile" | "frontend" | "devops" | "backend" | "misc";

const technologiesData: { name: string; category: TechCategories[] }[] = [
  {
    name: "Typescript",
    category: ["backend", "frontend", "mobile"],
  },
  {
    name: "Javascript",
    category: ["backend", "frontend", "mobile"],
  },
  {
    name: "Nodejs",
    category: ["backend"],
  },
  {
    name: "Kubernetes",
    category: ["devops"],
  },
  {
    name: "Docker",
    category: ["devops"],
  },
  {
    name: "Postgresql",
    category: ["backend"],
  },
  {
    name: "Reactjs",
    category: ["frontend"],
  },
  {
    name: "Express",
    category: ["backend"],
  },
  {
    name: "Prisma",
    category: ["backend"],
  },
  {
    name: "Html",
    category: ["frontend"],
  },
  {
    name: "Css",
    category: ["frontend"],
  },
  {
    name: "Vue",
    category: ["frontend"],
  },
  {
    name: "Nextjs",
    category: ["backend", "frontend"],
  },
  {
    name: "Tailwind",
    category: ["frontend"],
  },
  {
    name: "Bootstrap",
    category: ["frontend"],
  },
  {
    name: "Linux",
    category: ["backend", "devops"],
  },
  {
    name: "Rust",
    category: ["backend"],
  },
  {
    name: "React Native",
    category: ["mobile"],
  },
  {
    name: "Git",
    category: ["devops"],
  },
  {
    name: "CI/CD",
    category: ["devops"],
  },
  {
    name: "Axiom",
    category: ["devops"],
  },
  {
    name: "Python",
    category: ["backend"],
  },
  {
    name: "Flask",
    category: ["backend"],
  },
  {
    name: "C+",
    category: ["backend"],
  },
  {
    name: "Iot",
    category: ["misc"],
  },
  {
    name: "Arduino",
    category: ["misc"],
  },
  {
    name: "Java",
    category: ["backend"],
  },
];

export default technologiesData;
