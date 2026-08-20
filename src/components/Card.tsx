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
        "card-shadow p-10 border border-light-gray rounded-3xl max-w-xs w-full",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Card;
