"use client";
import Image from "next/image";
import { ProductImage, PyramidImage, TubeImage } from "@/src/assets";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
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
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      aria-labelledby="product-heading"
      className="py-24 bg-linear-to-b/srgb from-white to-light-blue overflow-x-clip"
    >
      <div className="container">
        <SectionHeading
          tag={productShowcaseData.tag}
          id="product-heading"
          title={productShowcaseData.title}
          titleClassName="mt-5"
          description={productShowcaseData.description}
          descriptionClassName="mt-5"
        />

        <div className="relative">
          <Image
            src={ProductImage}
            alt="Prodway product dashboard"
            className="mt-10"
          />
          <motion.img
            src={PyramidImage.src}
            alt=""
            aria-hidden="true"
            width={262}
            height={262}
            className="hidden md:block absolute -right-36 -top-32"
            style={{
              translateY: shouldReduceMotion ? 0 : translateY,
            }}
          />
          <motion.img
            src={TubeImage.src}
            alt=""
            aria-hidden="true"
            width={248}
            height={248}
            className="hidden md:block absolute -left-36 bottom-24"
            style={{
              translateY: shouldReduceMotion ? 0 : translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};
