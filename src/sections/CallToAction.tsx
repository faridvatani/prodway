"use client";
import { ArrowRight, StarImage, SpringImage } from "@/src/assets";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { callToActionData } from "@/src/lib/constants";
import Link from "next/link";
import SectionHeading from "@/src/components/SectionHeading";

export const CallToAction = () => {
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
      aria-labelledby="cta-heading"
      className="bg-linear-to-b/srgb from-white to-light-blue py-24 overflow-x-clip"
    >
      <div className="container">
        <SectionHeading
          className="relative"
          id="cta-heading"
          title={callToActionData.title}
          description={callToActionData.description}
        >
          <motion.img
            src={StarImage.src}
            alt=""
            aria-hidden="true"
            width={360}
            className="absolute -left-87.5 -top-34.25"
            style={{
              translateY: shouldReduceMotion ? 0 : translateY,
            }}
          />
          <motion.img
            src={SpringImage.src}
            alt=""
            aria-hidden="true"
            width={360}
            className="absolute -right-82.75 -top-4.75"
            style={{
              translateY: shouldReduceMotion ? 0 : translateY,
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
            <ArrowRight aria-hidden="true" className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
