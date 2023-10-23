import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="fixed z-50 mx-auto flex h-20 w-full justify-around bg-gradient-to-b from-[#1f2733] to-[#1f2838] px-4 py-4 text-xl shadow shadow-pink-500">
      <Link
        href="/"
        className="inline-flex items-center justify-center font-semibold underline drop-shadow"
      >
        <Image alt="Logo" src="/logo-transparent.png" width={48} height={48} />
      </Link>
      <Link
        href="/about"
        className="inline-flex items-center justify-center font-semibold underline drop-shadow"
      >
        Projects
      </Link>
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
        className="inline-flex items-center justify-center font-semibold underline drop-shadow"
      >
        About
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
        className="inline-flex items-center justify-center font-semibold underline drop-shadow"
      >
        Contact
      </Link>
      <Link
        href="/blog"
        className="inline-flex items-center justify-center font-semibold underline drop-shadow"
      >
        Blog
      </Link>
    </div>
  );
};

export default Header;
