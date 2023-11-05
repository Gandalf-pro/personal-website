import dayjs from "dayjs";
import Image from "next/image";
import { memo } from "react";
import { type RouterOutputs } from "~/utils/api";
import TechnologiesShowcase from "./TechnologiesShowcase";

export interface BlogInfoTopProps {
  blog: RouterOutputs["blogs"]["getSingleBlog"]["blog"];
}

const BlogInfoTop = ({ blog }: BlogInfoTopProps) => {
  return (
    <section className="container mx-auto mt-8 px-2 sm:px-0">
      <h1 className="text-5xl font-extrabold">{blog.title}</h1>
      <div className="mt-5 flex flex-row gap-2 overflow-x-auto">
        {blog.skills.map(({ skill }) => (
          <TechnologiesShowcase text={skill.name} key={skill.id} />
        ))}
      </div>
      <div className="mt-3 inline-flex items-center justify-center gap-3">
        <Image alt="Logo" src="/logo-transparent.png" width={64} height={64} />
        <div className="flex flex-col">
          <h2 className="text-lg font-bold">{blog.author.name}</h2>
          <div className="inline-flex items-center justify-center gap-2">
            <h2 className="font-medium">
              Published {dayjs(blog.createdAt).format("MMM DD, YY")}
            </h2>{" "}
            <span>·</span>{" "}
            <h2 className="font-medium">
              Last Updated {dayjs(blog.updatedAt).format("MMM DD, YY")}
            </h2>
          </div>
        </div>
      </div>
      <div className="my-3 h-px w-full rounded bg-white/30" />
    </section>
  );
};

export default memo(BlogInfoTop);
