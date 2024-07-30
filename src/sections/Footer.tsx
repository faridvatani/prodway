"use client";
import {
  Logo,
  SocialX,
  SocialInstagram,
  SocialLinkedIn,
  SocialPinterest,
  SocialYoutube,
} from "@/src/assets";
import Image from "next/image";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative">
          <motion.div
            className="absolute inset-0 blur-md rounded-full"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
            style={{
              background:
                "linear-gradient(to right, #F87BFF, #FB92CF, #FFDD9B, #C2F0B1, #2FD8FE)",
            }}
          />
          <Image
            src={Logo}
            alt="Prodway SaaS logo"
            width={40}
            height={40}
            className="relative"
          />
        </div>

        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <SocialX className="cursor-pointer" />
          <SocialInstagram className="cursor-pointer" />
          <SocialLinkedIn className="cursor-pointer" />
          <SocialPinterest className="cursor-pointer" />
          <SocialYoutube className="cursor-pointer" />
        </div>
        <p className="mt-6">
          &copy; 2024 Your Company, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
