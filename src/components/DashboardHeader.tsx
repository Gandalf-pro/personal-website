import Image from "next/image";
import Link from "next/link";
import HeaderUnderline from "./HeaderUnderline";
import { useState } from "react";
import Hamburger from "./Hamburger";
import { motion } from "framer-motion";

const DashboardHeader = () => {
  const [isVisible, setIsVisible] = useState(false);

  const innerLinks = (
    <>
      <Link
        href="/admin/dashboard"
        className="group inline-flex h-fit items-center justify-center font-medium drop-shadow"
      >
        Dashboard
        <HeaderUnderline />
      </Link>
      <Link
        href="/admin/dashboard/blog/new"
        className="group inline-flex h-fit items-center justify-center font-medium drop-shadow"
      >
        New Blog
        <HeaderUnderline />
      </Link>
    </>
  );

  return (
    <div className="sticky top-0 z-50 mx-auto h-fit w-full bg-gradient-to-b from-[#1f2733] to-[#1f2838] px-4 py-2 text-xl shadow shadow-pink-500 transition-all sm:h-20">
      <div className="flex h-full w-full items-center justify-between sm:justify-around">
        <motion.div
          initial={{ x: "-100%", opacity: 0.6 }}
          animate={{ x: "0", opacity: 1 }}
          transition={{ ease: "anticipate", duration: 0.75, type: "spring" }}
        >
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
        </motion.div>
        {/* Sm hamburger */}
        <div className="block sm:hidden">
          <Hamburger isVisible={isVisible} setIsVisible={setIsVisible} />
        </div>

        <div className="hidden sm:block">
          <motion.div
            initial={{ x: "50%", opacity: 0.6 }}
            animate={{ x: "0", opacity: 1 }}
            transition={{ ease: "anticipate", duration: 0.75, type: "spring" }}
          >
            <div className="flex gap-3">{innerLinks}</div>
          </motion.div>
        </div>
      </div>
      {isVisible && (
        <motion.div
          layout
          initial={{ x: "-50%", opacity: 0.6 }}
          animate={{ x: "0", opacity: 1 }}
          transition={{ ease: "anticipate", duration: 0.75, type: "spring" }}
          className="flex flex-col gap-3 pb-3 sm:hidden"
        >
          {innerLinks}
        </motion.div>
      )}
    </div>
  );
};

export default DashboardHeader;
