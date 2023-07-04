import React from "react";
import footerBg from "../../public/images/image/footer.bg.png";
import home3 from "../../public/images/image/home3.png";
import Image from "next/image";
import Link from "next/link";
import arrow2 from "../../public/images/icons/Arrow2.svg";

const FooterHome = () => {
  const bgStyle = {
    backgroundImage: `url(${footerBg.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "428px",
    width: "100%",
  };

  return (
    <>
      <div
        className="flex flex-col md:flex-row justify-around items-start p-6 md:p-20 bg-[#2f627e] opacity-150 inset-0 z-0"
        style={bgStyle}
      >
        <div className="w-full md:w-1/2 flex flex-col gap-y-8 p-3">
          <div className="text-white text-2xl font-extralight">
            Hizmetlerimiz
          </div>
          <div className="text-white font-extralight">
            Uzmanlardan oluşan ekibimiz, müşterilerimizin benzersiz
            ihtiyaçlarını karşılamak için en iyi çözümleri sunar.Daha fazlası
            için hemen aşağıdan teklif alabilirsiniz.
          </div>
          <div>
            <Link href="/contact">
              <button className="flex items-center gap-x-3 text-white font-extralight border-white border-[1px] p-3">
                Teklif Al
                <Image src={arrow2} width="auto" height="auto" alt="arrow" />
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-auto sm:gap-5">
          <ul className="flex flex-col gap-4 md:gap-6">
            <li className="text-white font-extralight">
              Yapısal Tasarım Hizmetleri
            </li>
            <li className="text-white font-extralight">
              Deprem Performans Değerlendirmesi ve Güçlendirme
            </li>
            <li className="text-white font-extralight">
              Görsel İnceleme ve Durum Değerlendirmesi
            </li>
            <li className="text-white font-extralight">
              Dinamik ve Titreşim Mühendislik Hizmetleri
            </li>
          </ul>
          <Link href="/services">
            <div className="flex items-center gap-x-3 text-white font-extralight text-sm underline mt-2">
              Tümünü Görüntüle
              <Image src={arrow2} width="auto" height="auto" alt="arrow" />
            </div>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-5 my-6">
        <Image
          src={home3}
          width="full"
          height="auto"
          alt="home3"
          className="mx-auto"
        />
        <div className="container mx-auto w-96 text-textColor font-titilum italic mb-8">
          -Blog bölümümüz yakında yayınlanacaktır.-
        </div>
      </div>
    </>
  );
};

export default FooterHome;
