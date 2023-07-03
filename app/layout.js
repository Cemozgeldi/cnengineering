import "./globals.css";
import { Inter } from "next/font/google";
import FooterHome from "@/components/ui/FooterHome";
import Navbar from "@/components/layout/Navbar";
import MobileMenu from "@/components/layout/MobileMenu";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CN Mühendislik",
  description: "CN Mühendislik",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Navbar />
        <MobileMenu />
      </body>
    </html>
  );
}
