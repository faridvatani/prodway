"use client";
import Image from "next/image";
import {
  AcmeLogo,
  ApexLogo,
  CelestialLogo,
  EchoLogo,
  PulseLogo,
  QuantumLogo,
} from "@/src/assets";
import { motion } from "framer-motion";

const logos = [
  { src: AcmeLogo, alt: "Acme Logo" },
  { src: QuantumLogo, alt: "Quantum Logo" },
  { src: EchoLogo, alt: "Echo Logo" },
  { src: CelestialLogo, alt: "Celestial Logo" },
  { src: PulseLogo, alt: "Pulse Logo" },
  { src: ApexLogo, alt: "Apex Logo" },
];

const scrollingLogos = [
  ...logos.map((logo) => ({ ...logo, key: `${logo.alt}-first` })),
  ...logos.map((logo) => ({ ...logo, key: `${logo.alt}-second` })),
];

export const LogoTicker = () => {
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden mask-[linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            }}
          >
            {scrollingLogos.map((logo) => (
              <Image
                key={logo.key}
                src={logo.src}
                alt={logo.alt}
                className="h-8 w-auto"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
