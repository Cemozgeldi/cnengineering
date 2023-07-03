import React from "react";
import Image from "next/image";
import Link from "next/link";
import homeBg from "../../public/images/image/home.png";
import Navbar from "../layout/Navbar";
import Arrow from "../../public/images/icons/Arrow1.svg";
import HomeCard from "./HomeCard";
const Hero = () => {
  const imageUrl = "../../public/images/image/home.png";
  return (
    <div className="w-full min-h-screen">
      <Image
        src={homeBg}
        alt="homeBg"
        height="1090"
        width="1920"
        priority
        className="w-full h-full object-cover absolute inset-0 z-0"
      />
      <div className="absolute inset-0 z-10 flex flex-col justify-center">
        <div className="container mx-auto py-24">
          <div className=" text-left font-titilum">
            <div className="text-5xl mb-6 leading-[73px] text-[#4A5C7A] font-[275] font-titilum">
              Değerlendirme
            </div>
            <div className="max-w-xs text-[#4A5C7A] font-[275] leading-[30px]">
              CN Mühendislik olarak insanları ve yapıları depremlerin yıkıcı
              etkilerinden korumak için hizmet sağlıyoruz
            </div>
            <Link href="/contact">
              <button className="flex justify-between items-center gap-6 border-2 rounded-sm mt-8 p-3 text-[#2F627E] border-[#2F627E] ">
                İletişim
                <Image src={Arrow} width="auto" height="auto" alt="arrow" />
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* <HomeCard /> */}
    </div>
  );
};

export default Hero;
