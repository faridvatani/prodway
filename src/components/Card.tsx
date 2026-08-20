import type { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type CardProps = {
  children: ReactNode;
  className?: string;
  ariaHidden?: boolean;
};

const Card: FC<CardProps> = ({ children, className, ariaHidden }) => {
  return (
    <div
      aria-hidden={ariaHidden || undefined}
      className={twMerge(
        "p-10 border border-light-gray rounded-3xl shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Card;
