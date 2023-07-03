import React from "react";
import Image from "next/image";
import proje2 from "../../public/images/image/pr22.png";
import Footer from "../../components/layout/Footer";
import Link from "next/link";
const page = () => {
  const prStyle = {
    height: "480px",
    width: "1980px",
  };
  return (
    <>
      <div className="flex container mx-auto md:mt-48 mt-24 md:gap-y-24 gap-y-1 items-center gap-5 md:flex-row flex-col">
        <div className=" flex align-middle justify-center my-24">
          <Image src={proje2} alt="proje1" style={prStyle} />
        </div>
        <div className="flex flex-col md:gap-16 gap-8 md:mb-8 mb-12">
          <div className="text-textColor font-titilum text-lg">
            Allianz Tower Deprem Performans Değerlendirmesi
          </div>
          <div className="text-textColor font-titilum">
            Allianz Tower&apos;ı satın alımı öncesi ayrıntılı sismik performans
            değerlendirme hizmeti verdik. Kulenin sismik performansı ATC72,
            ASCE41 gibi uluslararası kodlar dikkate alınarak son teknoloji
            lineer olmayan dinamik analizlerle değerlendirilmiştir.
          </div>
          <div className="text-xs font-titilum font-extralight">
            *Kurucumuzun CN Danışmanlık öncesi tecrübesidir.
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <Link href="/project1">
          <button className="p-3 hover:text-textColor text-white hover:bg-[#eef7] bg-[#4A5C7A] rounded-sm my-3">
            Önceki
          </button>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default page;
