import React from "react";
import { twMerge } from "tailwind-merge";
import Tag from "./Tag";

interface SectionHeadingProps {
  title: string;
  description: string;
  tag?: string;
  className?: string;
  tagClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  children?: React.ReactNode;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  tag,
  title,
  description,
  className,
  tagClassName,
  titleClassName,
  descriptionClassName,
  children,
}) => {
  return (
    <div className={twMerge("max-w-[540px] mx-auto", className)}>
      {tag && (
        <div className="flex justify-center">
          <Tag content={tag} className={tagClassName} />
        </div>
      )}
      <h2
        className={twMerge(
          "text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-primary text-transparent bg-clip-text",
          titleClassName,
        )}
      >
        {title}
      </h2>
      <p
        className={twMerge(
          "text-center text-[22px] leading-[30px] tracking-tight text-darkBlue",
          descriptionClassName,
        )}
      >
        {description}
      </p>
      {children}
    </div>
  );
};

export default SectionHeading;
