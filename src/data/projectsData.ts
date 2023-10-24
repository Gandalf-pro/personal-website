export interface ProjectsDataType {
  name: string;
  slug: string;
  technologies: string[];
  description: string;
}

export const projectsData: ProjectsDataType[] = [
  {
    name: "📷 Portfolio Site",
    slug: "portfolio",
    technologies: ["Nextjs", "Reactjs", "Tailwind", "Typescript"],
    description:
      "A personal portfolio website to show my skills and knowledge.",
  },
  {
    name: "🤖 Discord Bot",
    slug: "discord-bot",
    technologies: ["Nodejs", "Typescript", "Ai", "Gcp"],
    description:
      "A discord bot with voice recognition. That plays music on a specific voice channel based on the voice command.",
  },
  {
    name: "🖼️ Unblur",
    slug: "unblur",
    technologies: [
      "Nodejs",
      "Typescript",
      "Express",
      "Ai",
      "Python",
      "Postgresql",
    ],
    description:
      "An ios application that takes in photos to be unblured.An iOS application designed to enhance and clarify blurry photos by using advanced image processing techniques.",
  },
  {
    name: "🏥 Medigalen",
    slug: "medigalen",
    technologies: ["Nodejs", "Typescript", "React", "Css", "Postgresql"],
    description:
      "An online meeting platform for connecting health professionals with patients.",
  },
  {
    name: "🏠 Auto Home",
    slug: "auto-home",
    technologies: [
      "Nodejs",
      "Typescript",
      "C++",
      "Mqtt",
      "Iot",
      "React Native",
      "React",
    ],
    description:
      "Home automation system for controlling the lights/blinds etc...",
  },
  {
    name: "📝 Paragraph Writer",
    slug: "gptalk",
    technologies: [
      "Nodejs",
      "Typescript",
      "Express",
      "Ai",
      "DigitalOcean",
      "Postgresql",
    ],
    description: "An ai writing assistant/actors to talk to.",
  },
  {
    name: "🏛️ Council Plus",
    slug: "council-plus",
    technologies: [
      "Vue",
      "Nodejs",
      "Javascript",
      "Express",
      "SequelizeOrm",
      "Aws",
      "Postgresql",
    ],
    description:
      "A comprehensive application that optimizes London council operations by enhancing efficiency, enabling citizens to report issues like missing trash, and empowering council members to manage tasks across departments.",
  },
  {
    name: "🎭 What If App",
    slug: "what-if",
    technologies: [
      "tRPC",
      "React Native",
      "Nextjs",
      "Ai",
      "Python",
      "DigitalOcean",
      "Postgresql",
      "Typescript",
    ],
    description:
      "A face changer ai application that can swap faces in videos/images.",
  },
];
