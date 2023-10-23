import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full py-4 text-center">
      Made By{" "}
      <Link href="/#about" className="text-pink-600">
        Özgür
      </Link>{" "}
      With ❤️
    </div>
  );
};

export default Footer;
