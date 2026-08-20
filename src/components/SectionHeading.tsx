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
    <div className={twMerge("section-heading mx-auto", className)}>
      {tag && (
        <div className="flex justify-center">
          <Tag content={tag} className={tagClassName} />
        </div>
      )}
      <h2
        className={twMerge(
          "section-heading-title text-center text-3xl font-bold tracking-tighter bg-linear-to-b from-black to-primary text-transparent bg-clip-text",
          titleClassName,
        )}
      >
        {title}
      </h2>
      <p
        className={twMerge(
          "section-heading-description text-center tracking-tight text-dark-blue",
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
