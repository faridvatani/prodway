import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

interface TagProps {
  content: React.ReactNode;
  className?: string;
}

const Tag: FC<TagProps> = ({ content, className }) => {
  return (
    <span
      className={twMerge(
        "inline-flex text-sm border border-darkGray/10 px-3 py-1 rounded-lg tracking-tight",
        className,
      )}
    >
      {content}
    </span>
  );
};

export default Tag;
