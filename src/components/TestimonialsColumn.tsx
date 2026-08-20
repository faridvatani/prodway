import { Fragment, type FC } from "react";
import Image, { type StaticImageData } from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Card from "@/src/components/Card";

interface Testimonial {
  text: string;
  imageSrc: StaticImageData;
  name: string;
  username: string;
}

interface TestimonialsColumnProps {
  testimonials: Testimonial[];
  className?: string;
  duration?: number;
}

const testimonialCopies = ["first", "second"] as const;

const TestimonialsColumn: FC<TestimonialsColumnProps> = ({
  testimonials,
  className,
  duration = 10,
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={className}>
      <motion.div
        className="flex flex-col gap-6 pb-6"
        animate={shouldReduceMotion ? undefined : { translateY: "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        {testimonialCopies.map((copy) => (
          <Fragment key={copy}>
            {testimonials.map(({ text, imageSrc, name, username }) => (
              <Card key={text} ariaHidden={copy === "second"}>
                <p>{text}</p>
                <div className="flex items-center gap-2 mt-5">
                  <Image
                    src={imageSrc}
                    alt={name}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full"
                  />
                  <div className="flex flex-col">
                    <div className="font-medium tracking-tight leading-5">
                      {name}
                    </div>
                    <div className="leading-5 tracking-tight">{username}</div>
                  </div>
                </div>
              </Card>
            ))}
          </Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default TestimonialsColumn;
