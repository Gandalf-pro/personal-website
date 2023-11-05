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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/Tooltip";
import CtaGradientButton from "./CtaGradientButton";
dayjs.extend(relativeTime);

export interface BlogsListCardProps {
  blog: RouterOutputs["blogs"]["getListOfBlogs"]["blogs"][number];
}

const BlogsListCard = ({ blog }: BlogsListCardProps) => {
  return (
    <Link href={`/blog/${blog.slug}`} className="h-full">
      <div className="flex h-full flex-col justify-between rounded bg-secondary p-3 shadow hover:bg-secondary hover:shadow-xl">
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
            <TooltipProvider delayDuration={250}>
              <Tooltip>
                <TooltipTrigger>
                  <div className="inline-flex items-center justify-center gap-1">
                    <IconCalendarPlus />
                    {dayjs(blog.createdAt).fromNow()}
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Published At</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <CtaGradientButton href={`/blog/${blog.slug}`}>
            Read <IconCaretRight className="h-7 w-7" />
          </CtaGradientButton>
        </div>
      </div>
    </Link>
  );
};

export default memo(BlogsListCard);
