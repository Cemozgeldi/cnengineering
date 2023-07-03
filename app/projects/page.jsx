import Navbar from "@/components/layout/Navbar";
import React from "react";
import projePage from "../../public/images/image/projelerimiz.png";
import yellowLine from "../../public/images/icons/yellowline.svg";
import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/components/ui/ProjectCard";
import Footer from "@/components/layout/Footer";

const page = () => {
  return (
    <div className="flex flex-col gap-y-24">
      <div className="w-2/3 h-16 mx-auto mt-48">
        <div className="text-textColor text-2xl font-titilum font-extralight flex gap-x-5 items-baseline">
          Biz Kimiz?
          <Image src={yellowLine} alt="yellowLine" width={128} height={5} />
        </div>
        <div className="text-3xl text-[#4a5c7a] font-titilum font-normal">
          Projelerimiz
        </div>
      </div>
      <div>
        <Image
          src={projePage}
          alt="projePage"
          className="object-fill max-h-100px mx-auto w-screen"
        />
      </div>
      <div>
        <ProjectCard />
      </div>
      <Footer />
    </div>
  );
};

export default page;
