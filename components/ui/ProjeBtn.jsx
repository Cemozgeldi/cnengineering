"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import vector1 from "../../public/images/icons/Vector (1).svg";

const ProjeBtn = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link href="/project1">
      <button
        className={`absolute left-0 index-1 z-50 bottom-0 flex items-center h-10 px-2 bg-blue-500 text-white transition-all duration-200 ${
          isHovered ? "w-36 justify-between bg-white" : "w-12 justify-center"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex items-center">
          {isHovered ? (
            <>
              <span className="ml-2 text-sm bg-white text-textColor whitespace-nowrap">
                Projeyi Görüntüle
              </span>
              <Image src={vector1} alt="vector1" />
            </>
          ) : (
            <Image src={vector1} alt="vector1" className="bg-blue-500" />
          )}
        </div>
      </button>
    </Link>
  );
};

export default ProjeBtn;
