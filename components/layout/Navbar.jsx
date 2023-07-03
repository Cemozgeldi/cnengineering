"use client";
import { useState } from "react";
import React from "react";
import Logo from "../ui/Logo";
import Link from "next/link";
import headphone from "../../public/images/icons/headphone.svg";
import Arrow from "../../public/images/icons/Arrow2.svg";
import Image from "next/image";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import bgHome from "../../public/images/image/home.png";
import { useMobileMenuStore } from "@/store";

const Navbar = () => {
  const openMenu = useMobileMenuStore((state) => state.open);
  return (
    <div className="text-textColor absolute top-0 inset-x-0 z-50">
      <div className="flex justify-between container mx-auto items-center h-full border-b-[1px] border-b-[#4A5C7A] ">
        <Logo />
        <nav
          className={`sm:static absolute top-0 left-0 sm:h-auto sm:w-auto w-full h-full sm:bg-transparent  sm:flex hidden `}
        >
          <ul className="flex gap-x-6 sm:flex-row flex-col items-center justify-end">
            <li className="px-[5px] py-[25px] hover:underline">
              <Link href="/" className="font- font-light font-xl">
                Anasayfa
              </Link>
            </li>
            <li className="px-[5px] py-[25px] hover:underline">
              <Link href="/about" className="font-titilum font-light font-xl">
                Hakkımızda
              </Link>
            </li>
            <li className="px-[5px] py-[25px] hover:underline">
              <Link
                href="/services"
                className="font-titilum font-light font-xl"
              >
                Hizmetlerimiz
              </Link>
            </li>
            <li className="px-[5px] py-[25px] hover:underline">
              <Link
                href="/projects"
                className="font-titilum font-light font-xl"
              >
                Projeler
              </Link>
            </li>
            <li className="px-[5px] py-[25px] hover:underline">
              <Link href="/contact" className="font-titilum font-light font-xl">
                İletişim
              </Link>
            </li>
          </ul>
        </nav>

        <button className="sm:hidden inline-block" onClick={() => openMenu()}>
          <GiHamburgerMenu className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
