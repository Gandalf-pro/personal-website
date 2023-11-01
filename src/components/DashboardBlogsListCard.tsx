import { type RouterOutputs } from "~/utils/api";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { IconCalendarPlus, IconRotate2, IconUser } from "@tabler/icons-react";
import Link from "next/link";
import { memo } from "react";
dayjs.extend(relativeTime);

export interface DashboardBlogsListCardProps {
  blog: RouterOutputs["blogs"]["getListOfBlogs"]["blogs"][number];
}

const DashboardBlogsListCard = ({ blog }: DashboardBlogsListCardProps) => {
  return (
    <Link
      className="rounded bg-black/50 p-4 shadow hover:bg-black/70 hover:shadow-xl"
      href={`/admin/dashboard/blog/${blog.id}`}
    >
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
    </Link>
  );
};

export default memo(DashboardBlogsListCard);
