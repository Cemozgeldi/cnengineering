import Navbar from "@/components/layout/Navbar";
import React from "react";
import yellowLine from "../../public/images/icons/yellowline.svg";
import contact from "../../public/images/image/iletisim.png";
import adress from "../../public/images/icons/adress.svg";
import phone from "../../public/images/icons/phone.svg";
import envelope from "../../public/images/icons/mail.svg";
import Image from "next/image";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex flex-col gap-y-24">
      <div className="w-2/3 h-16 mx-auto mt-48">
        <div className="text-textColor text-2xl font-titilum font-extralight flex gap-x-3 items-baseline">
          Biz Kimiz?
          <Image src={yellowLine} alt="yellowLine" width={128} height={3} />
        </div>
        <div className="text-3xl text-[#4a5c7a] font-titilum font-normal">
          İletişim
        </div>
      </div>
      <div>
        <Image
          src={contact}
          alt="contact"
          className="object-fill max-h-100px mx-auto w-screen"
        />
      </div>
      <div className="flex flex-col container mx-auto gap-y-16">
        <div className="text-textColor text-2xl font-titilum font-extralight flex gap-x-3 items-baseline">
          İletişim
          <Image src={yellowLine} alt="yellowLine" width={128} height={3} />
        </div>
        <div className="font-titilum">
          Bize her türlü soru, öneri veya talepleriniz için aşağıdaki
          yöntemlerden birisini seçebilirsiniz.{" "}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-3 container mx-auto ">
        <div>
          <div>
            <Image src={adress} alt="adress" />
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-textColor font-titilum font-semibold text-lg">
              Adres
            </div>
            <div>
              Merdivenköy, Business İstanbul, Dikyol Sokak No:2 D:B Blok, İç
              Kapı No:179,
              <br />
              <br />
              34732 Kadıköy/İstanbul
            </div>
          </div>
        </div>
        <div>
          <div>
            <Image src={phone} alt="phone" />
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-textColor font-titilum font-semibold text-lg">
              Telefon
            </div>
            <div>
              <Link href="tel:+902128872367">+90 212 887 23 67</Link>
            </div>
          </div>
        </div>
        <div>
          <div>
            <Image src={envelope} alt="envelope" />
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-textColor font-titilum font-semibold text-lg">
              Email
            </div>
            <div>
              <Link href="mailto:canozgeldi@cn-muhendislik.com">
                canozgeldi@cn-muhendislik.com
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
