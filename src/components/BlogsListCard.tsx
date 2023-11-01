import {
  IconCalendarPlus,
  IconCaretRight,
  IconRotate2,
  IconUser,
} from "@tabler/icons-react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Link from "next/link";
import { memo } from "react";
import { type RouterOutputs } from "~/utils/api";
dayjs.extend(relativeTime);

export interface BlogsListCardProps {
  blog: RouterOutputs["blogs"]["getListOfBlogs"]["blogs"][number];
}

const BlogsListCard = ({ blog }: BlogsListCardProps) => {
  return (
    <Link href={`/blog/${blog.slug}`}>
      <div className="rounded bg-secondary p-3 shadow hover:bg-secondary hover:shadow-xl">
        <div className="mb-3 text-2xl font-semibold">{blog.title}</div>
        {blog.skills.length > 0 && (
          <div className="-mt-1 mb-3 flex gap-1 overflow-x-auto">
            {blog.skills.map((val) => (
              <div
                key={val.skillId}
                className="whitespace-nowrap rounded-full bg-slate-700/70 px-2 py-1 text-sm text-primary/80"
              >
                {val.skill.name}
              </div>
            ))}
          </div>
        )}
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
          <Link
            href={`/blog/${blog.slug}`}
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-pink-600 px-4 py-1 text-lg shadow-sm shadow-pink-600 transition-colors hover:bg-gradient-to-br hover:from-pink-600 hover:to-red-600"
          >
            Read <IconCaretRight className="h-7 w-7" />
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default memo(BlogsListCard);
