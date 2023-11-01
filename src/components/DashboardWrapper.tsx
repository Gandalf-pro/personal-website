import { Noto_Sans_Mono } from "next/font/google";
import Head from "next/head";
import { type PropsWithChildren } from "react";
import { cn } from "~/utils/cn";
import DashboardHeader from "./DashboardHeader";

const notoFont = Noto_Sans_Mono({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export interface DashboardWrapperProps extends PropsWithChildren {
  title?: string;
  className?: string;
}

const DashboardWrapper = ({
  children,
  title,
  className,
}: DashboardWrapperProps) => {
  return (
    <div
      className={`${notoFont.variable} bg-gradient-to-br from-[#1f2733] to-[#1f2838] font-mono text-white`}
    >
      <Head>
        <title>{title ?? "Portfolio"}</title>
        <meta
          name="description"
          content="Özgür Sargut Portfolio/Personal Website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardHeader />
      <main className={cn(`min-h-screen`, className)}>{children}</main>
    </div>
  );
};

export default DashboardWrapper;
