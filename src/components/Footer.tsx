import React from "react";
import Logo from "../assets/logo_big.png";
import Image from "next/image";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-info text-white">
      <footer className="footer max-w-[1360px] mx-auto p-10 mt-10">
        <div>
          <Image
            src={Logo}
            alt="Opare logo"
            width={170}
            quality={100}
          />
          <p className="text-md font-normal">
            Opare Products and Services Ltd.
            <br />
            Accurate Product Accurate Service
          </p>
        </div>
        <div>
          <span className="text-2xl font-bold">On Social Media</span>
          <div className="grid grid-flow-col gap-4">
            <Link href="https://www.facebook.com">
              <FaFacebookF />
            </Link>
            <Link href="https://www.youtube.com">
              <FaYoutube />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
