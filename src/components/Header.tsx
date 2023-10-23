import Image from "next/image";
import Link from "next/link";
import HeaderUnderline from "./HeaderUnderline";

const Header = () => {
  return (
    <div className="fixed z-50 mx-auto flex h-20 w-full items-center justify-around bg-gradient-to-b from-[#1f2733] to-[#1f2838] px-4 py-4 text-xl shadow shadow-pink-500">
      <Link
        href="/"
        className="group inline-flex h-fit items-center justify-center drop-shadow"
      >
        <Image alt="Logo" src="/logo-transparent.png" width={48} height={48} />
      </Link>
      <div className="flex gap-3">
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
      </div>
    </div>
  );
};

export default Header;
