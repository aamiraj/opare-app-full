import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Karla } from "next/font/google";
import Footer from "@/components/Footer";
import Menus from "@/components/Menus";
import ScrollTopButton from "@/components/ScrollTopButton";

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
        <header className="max-w-[1360px] m-auto">
          <Navbar />
        </header>
        <Menus />
        <div>{children}</div>
        <Footer />
        <ScrollTopButton />
      </body>
    </html>
  );
}
