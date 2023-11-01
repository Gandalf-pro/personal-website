import { api, type RouterOutputs } from "~/utils/api";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { IconCalendarPlus, IconRotate2, IconUser } from "@tabler/icons-react";
import Link from "next/link";
import { memo } from "react";
import { Switch } from "./Switch";
import { cn } from "~/utils/cn";
dayjs.extend(relativeTime);

export interface BlogsListCardProps {
  blog: RouterOutputs["blogs"]["getListOfBlogs"]["blogs"][number];
}

const BlogsListCard = ({ blog }: BlogsListCardProps) => {
  return (
    <Link href={`/blog/${blog.slug}`}>
      <div className="rounded bg-secondary p-3 shadow hover:bg-secondary hover:shadow-xl">
        <div className="mb-3 text-2xl font-semibold">{blog.title}</div>
        <div className="flex w-full flex-wrap items-center justify-between text-lg">
          <span className="inline-flex gap-1">
            <IconUser />
            {blog.author.name}
          </span>
          <div className="flex flex-wrap gap-1">
            <div className="inline-flex items-center justify-center gap-1">
              <IconCalendarPlus />
              {dayjs(blog.createdAt).fromNow(true)}
            </div>
            <div className="inline-flex items-center justify-center gap-1">
              <IconRotate2 />
              {dayjs(blog.updatedAt).fromNow(true)}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default memo(BlogsListCard);
