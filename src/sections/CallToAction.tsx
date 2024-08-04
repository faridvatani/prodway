"use client";
import { ArrowRight, StarImage, SpringImage } from "@/src/assets";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { callToActionData } from "@/src/constants";
import Link from "next/link";
import SectionHeading from "@/src/components/SectionHeading";

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <SectionHeading
          className="relative"
          title={callToActionData.title}
          description={callToActionData.description}
        >
          <motion.img
            src={StarImage.src}
            alt="Star Image"
            width={360}
            className="absolute -left-[350px] -top-[137px]"
            style={{
              translateY,
            }}
          />
          <motion.img
            src={SpringImage.src}
            alt="Spring Image"
            width={360}
            className="absolute -right-[331px] -top-[19px]"
            style={{
              translateY,
            }}
          />
        </SectionHeading>
        <div className="flex gap-2 mt-10 justify-center">
          <Link
            href={callToActionData.primaryButton.href}
            className="btn btn-primary"
          >
            {callToActionData.primaryButton.name}
          </Link>
          <Link
            href={callToActionData.secondaryButton.href}
            className="btn btn-text gap-1"
          >
            <span>{callToActionData.secondaryButton.name}</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
