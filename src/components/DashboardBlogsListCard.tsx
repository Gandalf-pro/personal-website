import { api, type RouterOutputs } from "~/utils/api";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import {
  IconCalendarPlus,
  IconRotate2,
  IconTrash,
  IconUser,
} from "@tabler/icons-react";
import Link from "next/link";
import { memo } from "react";
import { Switch } from "./ui/Switch";
import { cn } from "~/utils/cn";
import { Button } from "./ui/Button";
dayjs.extend(relativeTime);

export interface DashboardBlogsListCardProps {
  blog: RouterOutputs["blogs"]["getListOfBlogs"]["blogs"][number];
}

const DashboardBlogsListCard = ({ blog }: DashboardBlogsListCardProps) => {
  const apiContext = api.useUtils();
  const upsertBlog = api.blogs.upsertBlog.useMutation({
    onSuccess() {
      void apiContext.blogs.invalidate();
    },
  });
  const deleteBlog = api.blogs.deleteBlog.useMutation({
    onSuccess() {
      void apiContext.blogs.invalidate();
    },
  });

  const isLoading = upsertBlog.isLoading || deleteBlog.isLoading;

  return (
    <Link
      className={cn([
        "rounded bg-black/50 p-4 shadow hover:bg-black/70 hover:shadow-xl",
        isLoading && "pointer-events-none bg-black/60 blur-[1px]",
      ])}
      href={`/admin/dashboard/blog/${blog.id}`}
    >
      <div className="mb-3 inline-flex w-full items-center justify-between">
        <div className="text-2xl font-semibold">{blog.title}</div>
        <div>
          <Switch
            className="mr-2"
            checked={blog.active}
            disabled={isLoading}
            onClick={(e) => {
              e.preventDefault();
              upsertBlog.mutate({
                id: blog.id,
                active: !blog.active,
              });
            }}
          />
          <Button
            variant="destructive"
            size="icon"
            className=""
            disabled={isLoading}
            onClick={(e) => {
              e.preventDefault();
              deleteBlog.mutate({
                id: blog.id,
              });
            }}
          >
            <IconTrash className="" />
          </Button>
        </div>
      </div>
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
