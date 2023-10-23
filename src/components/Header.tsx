import Image from "next/image";
import Link from "next/link";
import HeaderUnderline from "./HeaderUnderline";
import { useState } from "react";
import Hamburger from "./Hamburger";
import { cn } from "~/utils/cn";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  const innerLinks = (
    <>
      <Link
        href="/#about"
        onClick={(e) => {
          const aboutSection = document.querySelector("#about");
          if (aboutSection) {
            e.preventDefault();
            aboutSection.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }
        }}
        className="group inline-flex h-fit items-center justify-center font-medium drop-shadow"
      >
        About
        <HeaderUnderline />
      </Link>
      <Link
        href="/#contact"
        onClick={(e) => {
          const aboutSection = document.querySelector("#contact");
          if (aboutSection) {
            e.preventDefault();
            aboutSection.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }
        }}
        className="group inline-flex h-fit items-center justify-center font-medium drop-shadow"
      >
        Contact
        <HeaderUnderline />
      </Link>
      <Link
        href="/projects"
        className="group inline-flex h-fit items-center justify-center font-medium drop-shadow"
      >
        Projects
        <HeaderUnderline />
      </Link>
      <Link
        href="/blog"
        className="group inline-flex h-fit items-center justify-center font-medium drop-shadow"
      >
        Blog
        <HeaderUnderline />
      </Link>
    </>
  );

  return (
    <div
      className={`fixed z-50 mx-auto w-full bg-gradient-to-b from-[#1f2733] to-[#1f2838] px-4 py-4 text-xl shadow shadow-pink-500 transition-all sm:h-20 ${
        isVisible ? "h-fit" : "h-20"
      }`}
    >
      <div className="flex h-full w-full items-center justify-around">
        <Link
          href="/"
          className="group inline-flex h-fit items-center justify-center drop-shadow"
        >
          <Image
            alt="Logo"
            src="/logo-transparent.png"
            width={48}
            height={48}
          />
        </Link>
        {/* Sm hamburger */}
        <div className="block sm:hidden">
          <Hamburger isVisible={isVisible} setIsVisible={setIsVisible} />
        </div>

        <div className="hidden gap-3 sm:flex">{innerLinks}</div>
      </div>
      {isVisible && (
        <div className="mt-3 flex flex-col gap-3 sm:hidden">{innerLinks}</div>
      )}
    </div>
  );
};

export default Header;
