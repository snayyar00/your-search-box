import React from "react";
import Logo from "@/assets/rectangular-logo.png";
import Image from "next/image";
import Xsocial from "@/assets/footer-images.tsx/social-x.svg";
import Insta from "@/assets/footer-images.tsx/social-insta.svg";
import Linkedin from "@/assets/footer-images.tsx/social-linkedin.svg";
import Youtube from "@/assets/footer-images.tsx/social-youtube.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#14093A] to-[#f2f2] text-[#BCBC] py-16 text-center  border-t border-gray-800">
      <div className="conatiner">
        <div className="inline-flex text-center relative items-center justify-center before:contents-[''] before:h-10  before:bg-gradient-to-r from-white/10 via-blue-700/40 to-black/10 before:inline-flex before:absolute before:blur before;top-2 before:bottom-0 before:w-full ">
          <Image src={Logo} height={40} alt="logo saas" className="relative" />
        </div>
        <ul className="flex flex-col gap-5 items-center mt-5 justify-center md:flex-row">
          <li>
            <Link href="/policies/privacy-policy" className="relative group">
              <span className="inline-block">Privacy Policy</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>

          <li>
            <Link
              href="/policies/terms-and-conditions"
              className="relative group"
            >
              <span className="inline-block">Terms of Services</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>

          <li>
            <Link href="#pricing" className="relative group">
              <span className="inline-block">Pricing</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>

          <li>
            <Link href="/contact" className="relative group">
              <span className="inline-block">Contact us</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        </ul>
        <div className="flex  items-center justify-center gap-5 mt-10">
          <Link href="#" aria-label="x-social-icon">
            <Xsocial className="h-15" />
          </Link>
          <Link href="#" aria-label="Instagram-social-icon">
            <Insta className="h-15" />
          </Link>
          <Link href="#" aria-label="LinkedIn-social-icon">
            <Linkedin className="h-15" />
          </Link>
          <Link href="#" aria-label="youtube-social-icon">
            <Youtube className="h-15" />
          </Link>
        </div>
        <div className="text-center mt-5 tracking-wide">
          &copy; 2024 Your Search Box, Inc. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
