import type { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type TagProps = {
  content: ReactNode;
  className?: string;
};

const Tag: FC<TagProps> = ({ content, className }) => {
  return (
    <span
      className={twMerge(
        "inline-flex text-sm border border-dark-gray/10 px-3 py-1 rounded-lg tracking-tight",
        className,
      )}
    >
      {content}
    </span>
  );
};

export default Tag;
