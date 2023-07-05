import React from "react";
import Image from "next/image";
import Link from "next/link";
import about from "../../public/images/image/hakkimizda.png";
import about2 from "../../public/images/image/hakkimizda1.png";
import Arrow from "../../public/images/icons/Arrow2.svg";
import Footer from "@/components/layout/Footer";
import yellowLine from "../../public/images/icons/yellowline.svg";

const page = () => {
  return (
    <div className="flex flex-col gap-y-24">
      <div className="w-2/3 h-16 mx-auto mt-48">
        <div className="text-textColor text-2xl font-titilum font-extralight flex gap-x-3 items-baseline">
          Biz Kimiz?
          <Image src={yellowLine} alt="yellowLine" width={128} height={3} />
        </div>
        <div className="text-3xl text-[#4a5c7a] font-titilum font-normal">
          Hakkımızda
        </div>
      </div>
      <div>
        <Image
          src={about}
          alt="about"
          className="object-fill max-h-100px mx-auto w-screen"
        />
        <div className="text-left word-wrap w-full p-4 max-w-lg justify-center align-middle mx-auto font-semibold md:text-xl text-sm mt-16 font-titilum bg-[#eff9ff]">
          Görevimiz;
          <br />
          Misyonumuz, müşterilerimize yüksek kaliteli, uygun maliyetli sismik
          risk azaltma hizmetleri sunmaktır.Çalışmalarımızın toplum üzerinde
          olumlu bir etki yaratabileceğine ve daha güvenli bir çevreye katkıda
          bulunabileceğine inanıyoruz.
        </div>
      </div>
      <div className="w-2/3 mx-auto ">
        <div className="text-textColor text-md font-titilum font-extralight flex gap-x-3 items-baseline">
          Biz Kimiz?
          <Image src={yellowLine} alt="yellowLine" width={128} height={3} />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-2 w-2/3 mx-auto">
        <div className=" w-full gap-y-16">
          <div>
            CN Mühendislik olarak insanları ve yapıları depremlerin yıkıcı
            etkilerinden korumak için hizmet sağlıyoruz. Uzmanlardan oluşan
            ekibimiz, daha güvenli, daha dayanıklı yapılar oluşturmak için
            sismik risk değerlendirmeleri, güçlendirme ve mühendislik
            hizmetlerinde uzmanlaşmıştır.
          </div>
          <div>
            <Image
              src={about2}
              alt="about"
              className="md:inline-block hidden"
            />
          </div>
        </div>
        <div className="w-full h-full gap-y-8">
          <div className="font-bold text-textColor font-titilum">
            Bizi ayıran nedir?
          </div>
          <div>
            Deneyimli Profesyoneller:Deneyimli profesyonellerden oluşan
            ekibimiz, sektörde onlarca yıllık deneyime sahip lisanslı
            mühendislerden oluşmakdatır.
          </div>
          <div>
            İşbirlikçi Yaklaşım: Müşterilerimizin benzersiz ihtiyaçlarını ve
            hedeflerini anlamak ve gereksinimlerini karşılayan özelleştirilmiş
            çözümler sunmak için müşterilerimizle yakın bir şekilde çalışıyoruz.
          </div>
          <div>
            Güvenlik: Yapıların depreme karşı güvenliğini sağlamak için hizmet
            veriyoruz ve daha güvenli inşa edilmiş ortamlar oluşturmaya katkıda
            bulunuyoruz.
          </div>
          <Link href="/contact">
            <div className="flex gap-x-1 bg-primaryBtn p-3 rounded w-32 ">
              <button className="bg-primaryBtn text-white md:text-center">
                İletişim
              </button>
              <Image
                src={Arrow}
                alt="Arrow"
                width="auto"
                height="auto"
                className="lg:inline-block hidden"
              />
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
