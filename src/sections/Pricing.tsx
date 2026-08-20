"use client";
import { CheckIcon } from "@/src/assets";
import { twMerge } from "tailwind-merge";
import { motion, useReducedMotion } from "framer-motion";
import { pricingTiers, pricingData } from "@/src/lib/constants";
import Card from "@/src/components/Card";
import SectionHeading from "@/src/components/SectionHeading";

export const Pricing = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section aria-labelledby="pricing-heading" className="py-24 bg-white">
      <div className="container">
        <SectionHeading
          className="relative"
          id="pricing-heading"
          title={pricingData.title}
          description={pricingData.description}
          descriptionClassName="mt-5"
        />
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-center gap-6 items-center mt-10">
          {pricingTiers.map(
            ({
              title,
              monthlyPrice,
              buttonText,
              popular,
              inverse,
              features,
            }) => (
              <Card
                key={title}
                className={twMerge(
                  inverse === true && "border-black bg-black text-white",
                )}
              >
                <div className="flex justify-between">
                  <h3
                    className={twMerge(
                      "text-lg font-bold text-black/50",
                      inverse === true && "text-white/60",
                    )}
                  >
                    {title}
                  </h3>
                  {popular === true && (
                    <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                      <motion.span
                        className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDf,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] bg-size-[200%] text-transparent bg-clip-text font-medium"
                        animate={
                          shouldReduceMotion
                            ? undefined
                            : { backgroundPositionX: "-100%" }
                        }
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          repeatType: "loop",
                          ease: "linear",
                        }}
                      >
                        Popular
                      </motion.span>
                    </div>
                  )}
                </div>
                <div className="flex items-baseline gap-1 mt-7.5">
                  <span className="text-4xl font-bold tracking-tighter leading-none">
                    {pricingData.currency + monthlyPrice}
                  </span>
                  <span className="tracking-tight font-bold text-black/50">
                    {pricingData.billingPeriod}
                  </span>
                </div>
                <button
                  className={twMerge(
                    "btn btn-primary w-full mt-7.5",
                    inverse === true && "bg-white text-black hover:bg-white/80",
                  )}
                >
                  {buttonText}
                </button>
                <ul className="flex flex-col gap-5 mt-8">
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm flex items-center gap-4"
                    >
                      <CheckIcon aria-hidden="true" className="w-6 h-6" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ),
          )}
        </div>
      </div>
    </section>
  );
};
