import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="bg-[#2F1F14]">
      <Image
        src="/images/logo.svg"
        alt="logo"
        width={100}
        height={100}
        className="mx-auto py-4"
      />
    </div>
  );
};

export default Header;
