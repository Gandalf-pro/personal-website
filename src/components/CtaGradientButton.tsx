import Link from "next/link";
import React, { type PropsWithChildren } from "react";

export interface CtaGradientButtonProps extends PropsWithChildren {
  href: string;
}

const CtaGradientButton = ({ href, children }: CtaGradientButtonProps) => {
  return (
    <Link
      href={href}
      className="group relative mt-3 inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-lg border-2 border-pink-600 px-4 py-1 text-lg transition-all hover:shadow-sm hover:shadow-pink-600"
    >
      <span className="relative z-10 inline-flex">{children}</span>
      <div className="absolute inset-0 -translate-x-full transform bg-gradient-to-r from-pink-600 to-red-600 transition-transform duration-500 ease-in-out group-hover:translate-x-0"></div>
    </Link>
  );
};

export default CtaGradientButton;
