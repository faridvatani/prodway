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
import { motion, useReducedMotion } from "framer-motion";
import { footerData } from "@/src/lib/constants";
import Link from "next/link";

export const Footer = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <footer className="bg-black text-gray text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative">
          <motion.div
            className="absolute inset-0 blur-md rounded-full"
            aria-hidden="true"
            animate={shouldReduceMotion ? undefined : { rotate: 360 }}
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

        <nav
          aria-label="Footer navigation"
          className="flex flex-col md:flex-row md:justify-center gap-6 mt-6"
        >
          {footerData.footerLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-white touch-manipulation focus-visible:outline-3 focus-visible:outline-blue-600 focus-visible:outline-offset-3"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <SocialX
            aria-hidden="true"
            className="hover:text-white cursor-pointer"
          />
          <SocialInstagram
            aria-hidden="true"
            className="hover:text-white cursor-pointer"
          />
          <SocialLinkedIn
            aria-hidden="true"
            className="hover:text-white cursor-pointer"
          />
          <SocialPinterest
            aria-hidden="true"
            className="hover:text-white cursor-pointer"
          />
          <SocialYoutube
            aria-hidden="true"
            className="hover:text-white cursor-pointer"
          />
        </div>
        <p className="mt-6">&copy;{footerData.copyRight}</p>
      </div>
    </footer>
  );
};
