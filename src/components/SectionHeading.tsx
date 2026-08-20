import type { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import Tag from "./Tag";

type SectionHeadingProps = {
  id?: string;
  title: string;
  description: string;
  tag?: string;
  className?: string;
  tagClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  children?: ReactNode;
};

const SectionHeading: FC<SectionHeadingProps> = ({
  id,
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
    <div className={twMerge("max-w-135 mx-auto", className)}>
      {tag && (
        <div className="flex justify-center">
          <Tag content={tag} className={tagClassName} />
        </div>
      )}
      <h2
        id={id}
        className={twMerge(
          "scroll-mt-36 text-center text-3xl md:text-[54px] md:leading-15 font-bold tracking-tighter bg-linear-to-b/srgb from-black to-primary text-transparent bg-clip-text",
          titleClassName,
        )}
      >
        {title}
      </h2>
      <p
        className={twMerge(
          "text-center text-[22px] leading-7.5 tracking-tight text-dark-blue",
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
