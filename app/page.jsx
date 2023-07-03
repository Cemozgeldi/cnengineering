import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import FooterHome from "@/components/ui/FooterHome";
import Hero from "@/components/ui/Hero";
import HomeCard from "@/components/ui/HomeCard";
import ProjectCard from "@/components/ui/ProjectCard";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <HomeCard />
      <ProjectCard />
      <FooterHome />
      <Footer />
    </main>
  );
}
