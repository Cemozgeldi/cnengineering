import React from "react";
import Image from "next/image";
import proje1 from "../../public/images/image/pr11.png";
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
          <Image src={proje1} alt="proje1" style={prStyle} />
        </div>
        <div className="flex flex-col md:gap-16 gap-8 md:mb-8 mb-12">
          <div className="text-textColor font-titilum text-lg font-semibold">
            BTC International Ceyhan Deniz Terminali Jetty İskelesi Görsel
            İnceleme
          </div>
          <div className="text-textColor font-titilum">
            Terminal iskelesi için ASCE Waterfront Facilities Inspection and
            Assessment uygun olarak yapı kondisyon değerlendirme hizmeti
            sağladık. Hizmet kapsamı, tüm yapısal elemanların görsel
            muayenesini, kusurların belgelenmesini ve son olarak elemanların
            durumuna göre bir derecelendirme önermeyi içerir. Kapsam ayrıca
            mevcut hasarlar için onarım yöntemleri önermeyi de içerir.
          </div>
          <div className="text-xs font-titilum font-extralight">
            *Kurucumuzun CN Danışmanlık öncesi tecrübesidir.
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <Link href="/project2">
          <button className="p-3 hover:text-textColor text-white hover:bg-[#eef7] bg-[#4A5C7A] rounded-sm my-3">
            Sonraki
          </button>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default page;
