import { Fira_Sans, Noto_Sans_Mono } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import React, { type PropsWithChildren } from "react";
import { Analytics } from "@vercel/analytics/react";
import { cn } from "~/utils/cn";
import Header from "./Header";
import Footer from "./Footer";

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
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export interface AppWrapperProps extends PropsWithChildren {
  title?: string;
  className?: string;
}

const AppWrapper = ({ children, title, className }: AppWrapperProps) => {
  return (
    <div
      className={`${firaFont.variable} ${notoFont.variable} bg-gradient-to-br from-[#1f2733] to-[#1f2838] font-mono text-white`}
    >
      <Head>
        <title>{title ?? "Portfolio"}</title>
        <meta
          name="description"
          content="Özgür Sargut Portfolio/Personal Website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={cn(`min-h-screen`, className)}>{children}</main>
      <Analytics />
      <Footer />
    </div>
  );
};

export default AppWrapper;
