import React from "react";
import Link from "next/link";
import Image from "next/image";
import pr1 from "../../public/images/image/pr1.png";
import pr2 from "../../public/images/image/pr2.png";
import proje3 from "../../public/images/image/project3.png";
import ProjeBtn from "./ProjeBtn";
import line from "../../public/images/icons/line.svg";
import Projebtn2 from "./Projebtn2";
const ProjectCard = () => {
  return (
    <div>
      <div className="flex items-center gap-x-5 container mx-auto text-2xl font-extralight text-[#4a5c7a]">
        Projelerimiz
        <Image src={line} alt="line" height={3} width={128} />
      </div>
      <div className="flex items-center container mx-auto text-sm font-titilum mt-8">
        Projelerimiz, müşterilerimize yüksek kaliteli ve uygun maliyetli sismik
        risk azaltma hizmetleri sunarak toplumda olumlu bir etki yaratmayı
        hedefliyoruz. Güvenli bir çevre için çalışıyoruz.
      </div>
      <div className="grid grid-cols-1 my-16 gap-5 sm:grid-cols-2 md:grid-cols-2 container bg-white w-full mx-auto">
        <div className="relative flex align-middle z-0 h-full bg-white">
          <Image src={pr1} alt="proje1" />

          <ProjeBtn />
        </div>
        <div className="relative flex flex-col h-auto ">
          <Image src={pr2} alt="proje1" />
          <Projebtn2 />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
