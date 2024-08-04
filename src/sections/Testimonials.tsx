"use client";

import React from "react";
import { testimonials, testimonialsData } from "@/src/constants";
import SectionHeading from "@/src/components/SectionHeading";
import TestimonialsColumn from "@/src/components/TestimonialsColumn";

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <SectionHeading
          tag={testimonialsData.tag}
          title={testimonialsData.title}
          titleClassName="mt-5"
          description={testimonialsData.description}
          descriptionClassName="mt-5"
        />
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};
