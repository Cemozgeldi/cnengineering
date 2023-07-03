"use client";
import React from "react";
import { useMobileMenuStore } from "@/store";
import Link from "next/link";
import { GiCancel } from "react-icons/gi";
const MobileMenu = () => {
  const { isOpen, close } = useMobileMenuStore();
  if (!isOpen) return null;
  return (
    <div className="fixed z-50 inset-0 bg-white">
      <div className="flex justify-end">
        <button onClick={close} className="m-4 text-3xl">
          <GiCancel />
        </button>
      </div>
      <ul className="flex gap-x-6 sm:flex-row flex-col items-center text-textColor text-2xl ">
        <li className="px-[5px] py-[25px] hover:underline">
          <Link href="/" className="font- font-light font-xl" onClick={close}>
            Anasayfa
          </Link>
        </li>
        <li className="px-[5px] py-[25px] hover:underline">
          <Link
            href="/about"
            className="font-titilum font-light font-xl"
            onClick={close}
          >
            Hakkımızda
          </Link>
        </li>
        <li className="px-[5px] py-[25px] hover:underline">
          <Link
            href="/services"
            className="font-titilum font-light font-xl"
            onClick={close}
          >
            Hizmetlerimiz
          </Link>
        </li>
        <li className="px-[5px] py-[25px] hover:underline">
          <Link
            href="/projects"
            className="font-titilum font-light font-xl"
            onClick={close}
          >
            Projeler
          </Link>
        </li>
        <li className="px-[5px] py-[25px] hover:underline">
          <Link
            href="/contact"
            className="font-titilum font-light font-xl"
            onClick={close}
          >
            İletişim
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
