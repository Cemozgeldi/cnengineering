import React from "react";
import Link from "next/link";
import Image from "next/image";
import yellowArrow from "../../public/images/icons/Vector.svg";
import arrow from "../../public/images/icons/Arrow1.svg";
const HomeCard = () => {
  return (
    <div className="grid grid-cols-1 my-32 gap-5 sm:grid-cols-2 md:grid-cols-3 container  bg-white w-full mx-auto">
      <div className="flex flex-col gap-12 h-full justify-center">
        <div>
          <Image src={yellowArrow} alt="yellowArrow" />
        </div>
        <div className="text-[#2f627e] text-2xl font-extralight">
          Biz Kimiz?
        </div>
        <div className="text-textColor text-xl">
          CN Mühendislik olarak insanları ve yapıları depremlerin yıkıcı
          etkilerinden korumak için hizmet sağlıyoruz.
        </div>
        <div className="border-t-[1px] border-t-[#2f627e] mt-7">
          <Link href="/about">
            <button className="flex justify-between items-center gap-6 rounded-sm mt-8 p-3 text-[#2F627E] border-[#2F627E] ">
              Detaylı bilgi
              <Image src={arrow} alt="arrow" />
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-12 h-full">
        <div>
          <Image src={yellowArrow} alt="yellowArrow" />
        </div>
        <div className="text-[#2f627e] text-2xl font-extralight">
          Projelerimiz
        </div>
        <div className="text-textColor text-xl">
          Yapısal mühendislik ve deprem mühendisliği hizmetleriyle sismik
          riskleri azaltıyoruz, yapıların güvenliğini sağlıyoruz.
        </div>
        <div className="border-t-[1px] border-t-[#2f627e]">
          <Link href="/projects">
            <button className="flex justify-between items-center gap-6 rounded-sm mt-8 p-3 text-[#2F627E] border-[#2F627E] ">
              Detaylı bilgi
              <Image src={arrow} alt="arrow" />
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-12 h-full">
        <div>
          <Image src={yellowArrow} alt="yellowArrow" />
        </div>
        <div className="text-[#2f627e] text-2xl font-extralight">
          Çözümlerimiz
        </div>
        <div className="text-textColor text-xl">
          Uzmanlardan oluşan ekibimiz, müşterilerimizin benzersiz ihtiyaçlarını
          karşılayan özel çözümler geliştirmek için bilgi ve deneyime sahiptir.
        </div>
        <div className="border-t-[1px] border-t-[#2f627e]">
          <Link href="/services">
            <button className="flex justify-between items-center gap-6 rounded-sm mt-8 p-3 text-[#2F627E] border-[#2F627E] ">
              Detaylı bilgi
              <Image src={arrow} alt="arrow" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
