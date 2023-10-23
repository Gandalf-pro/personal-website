import { Fira_Sans, Noto_Sans_Mono } from "next/font/google";
import Head from "next/head";
import React, { PropsWithChildren } from "react";
import { cn } from "~/utils/cn";

const firaFont = Fira_Sans({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

const notoFont = Noto_Sans_Mono({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600", "700", "800"],
});

export interface AppWrapperProps extends PropsWithChildren {
  title?: string;
  className?: string;
}

const AppWrapper = ({ children, title, className }: AppWrapperProps) => {
  return (
    <>
      <Head>
        <title>{title ?? "Portfolio"}</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={cn(
          `min-h-screen font-mono text-white ${firaFont.variable} ${notoFont.variable} bg-gradient-to-br from-[#1f2733] to-[#1f2838]`,
          className
        )}
      >
        {children}
      </main>
    </>
  );
};

export default AppWrapper;