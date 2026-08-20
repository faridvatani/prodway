import type { ReactNode } from "react";
import { DM_Sans } from "next/font/google";
import { twMerge } from "tailwind-merge";
import "@/src/styles/globals.css";
import { StructuredData } from "@/src/components/StructuredData";

export { metadata, viewport } from "./metadata";

const dmSans = DM_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={twMerge(dmSans.className, "antialiased bg-secondary")}>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
