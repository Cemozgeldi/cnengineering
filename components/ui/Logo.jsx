import React from "react";
import CnLogo from "../../public/images/image/cnlog.svg";
import Image from "next/image";
import Link from "next/link";
const Logo = () => {
  return (
    <div>
      <Link href="/">
        <Image className="cursor-pointer" src={CnLogo} alt="Cn Logo" priority />
      </Link>
    </div>
  );
};

export default Logo;
