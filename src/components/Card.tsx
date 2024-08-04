import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  role?: string; // Optional role for accessibility
}

const Card: FC<CardProps> = ({ children, className, role = "region" }) => {
  return (
    <div
      role={role}
      className={twMerge(
        "p-10 border border-lightGray rounded-3xl shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Card;
