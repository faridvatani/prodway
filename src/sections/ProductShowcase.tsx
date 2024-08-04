"use client";
import Image from "next/image";
import { ProductImage, PyramidImage, TubeImage } from "@/src/assets";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { productShowcaseData } from "@/src/lib/constants";
import SectionHeading from "@/src/components/SectionHeading";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-[#ffffff] to-[#D2DCFF] overflow-x-clip"
    >
      <div className="container">
        <SectionHeading
          tag={productShowcaseData.tag}
          title={productShowcaseData.title}
          titleClassName="mt-5"
          description={productShowcaseData.description}
          descriptionClassName="mt-5"
        />

        <div className="relative">
          <Image src={ProductImage} alt="Product Image" className="mt-10" />
          <motion.img
            src={PyramidImage.src}
            alt="Pyramid Image"
            width={262}
            height={262}
            className="hidden md:block absolute -right-36 -top-32"
            style={{
              translateY,
            }}
          />
          <motion.img
            src={TubeImage.src}
            alt="Tube Image"
            width={248}
            height={248}
            className="hidden md:block absolute -left-36 bottom-24"
            style={{
              translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};
