import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-4 text-center">
      Made By{" "}
      <Link href="/#about" className="text-pink-600">
        Özgür
      </Link>{" "}
      With ❤️
    </footer>
  );
};

export default Footer;
