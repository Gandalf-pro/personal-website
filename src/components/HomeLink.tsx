import type { TablerIconsProps } from "@tabler/icons-react";
import Link from "next/link";
import React, { type JSX } from "react";
import { cn } from "~/utils/cn";

export interface HomeLinkProps {
  href: string;
  className?: string;
  Icon: (props: TablerIconsProps) => JSX.Element;
}

const HomeLink = ({ className, href, Icon }: HomeLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "rounded-full bg-slate-700 bg-opacity-60 p-3 transition-all hover:bg-opacity-40 hover:text-pink-600 hover:shadow-xl hover:shadow-pink-600/50",
        className
      )}
    >
      <Icon className="h-8 w-8 sm:h-12 sm:w-12" />
    </Link>
  );
};

export default HomeLink;
