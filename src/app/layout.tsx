import Navbar from "@/components/Layout/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Karla } from "next/font/google";
import Footer from "@/components/Layout/Footer";
import Menus from "@/components/Layout/Menus";
import ScrollTopButton from "@/components/Layout/ScrollTopButton";
import BottomNav from "@/components/Layout/BottomNav";

const karla = Karla({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OPARE | Accurate Product Accurate Service",
  description:
    "We guarantee to provide you with quality goods as well as services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${karla.className}`}>
        <header className="">
          <Menus />
          <Navbar />
        </header>
        <div>{children}</div>
        <Footer />
        <ScrollTopButton />
        <BottomNav />
      </body>
    </html>
  );
}
