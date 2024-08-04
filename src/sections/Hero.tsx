"use client";
import {
  ArrowRight as Icon,
  CogImage,
  CylinderImage,
  NoodleImage,
} from "@/src/assets";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { heroData } from "@/src/constants";
import Tag from "@/src/components/Tag";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip"
    >
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <Tag content={heroData.tag} />
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter md:leading-tight bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              {heroData.title}
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              {heroData.description}
            </p>
            <div className="flex items-center gap-1 mt-[30px]">
              <button type="button" className="btn btn-primary">
                {heroData.primaryButton}
              </button>
              <button type="button" className="btn btn-text gap-1">
                <span>{heroData.secondaryButton}</span>
                <Icon className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
              src={CogImage.src}
              alt="Cog Image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
              animate={{ translateY: [-30, 30] }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
            />
            <motion.img
              src={CylinderImage.src}
              alt="Cylinder Image"
              width={220}
              height={220}
              className="hidden md:block -top-8 -left-32 md:absolute"
              style={{
                translateY,
              }}
            />
            <motion.img
              src={NoodleImage.src}
              alt="Noodle Image"
              width={220}
              className="hidden lg:block absolute top-[524px] left-[488px] rotate-[30deg]"
              style={{
                rotate: 30,
                translateY,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
