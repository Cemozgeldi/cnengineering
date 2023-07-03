import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#2f627e]">
      <div className="bg-[#2f627e] h-1/2 w-full mx-auto flex md:flex-row flex-col justify-around items-start py-10 md:p-20 border-b-[1px] border-b-white]">
        <div className="p-5">
          <ul>
            <p className="text-white font-titilum text-3xl pb-5">
              CN Mühendislik
            </p>
            <div className="flex gap-6 pb-5 text-white font-titilum font-extralight text-wrap ">
              İnşaat ve deprem mühendisliği alanında uzmanlaşmış, kaliteli
              hizmet sunan bir firma olarak, yapılarınızı en üst seviyede
              korumak için buradayız.
            </div>
            <div>
              <li>
                <Link
                  href="/"
                  className="text-white font-titilum font-extralight"
                >
                  www.cn-muhendislik.com
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:canozgeldi@cn-muhendislik.com"
                  className="text-white font-titilum font-extralight"
                >
                  canozgeldi@cn-muhendislik.com
                </Link>
              </li>
            </div>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-white font-titilum text-2xl pb-4">CN</p>
            <Link href="/about">
              <li className="text-white font-titilum font-extralight pb-2">
                Hakkımızda
              </li>
            </Link>
            <Link href="/contact">
              <li className="text-white font-titilum font-extralight pb-2">
                İletişim
              </li>
            </Link>
            <Link href="/projects">
              <li className="text-white font-titilum font-extralight pb-2">
                Projeler
              </li>
            </Link>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-white font-titilum text-2xl pb-4">Hizmetler</p>
            <Link href="/services">
              <li className="text-white font-titilum font-extralight pb-2">
                Denetim
              </li>
            </Link>
            <Link href="/services">
              <li className="text-white font-titilum font-extralight pb-2">
                Tasarım
              </li>
            </Link>
            <Link href="/services">
              <li className="text-white font-titilum font-extralight pb-2">
                Mühendislik
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="text-center text-white font-titilum text-md font-extralight p-16">
        © 2023 CN Mühendislik. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
