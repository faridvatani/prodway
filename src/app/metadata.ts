import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/src/lib/site";

export const metadata: Metadata = {
  metadataBase: siteConfig.url,
  title: siteConfig.title,
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: {
    canonical: "./",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "./",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: "./social-preview.png",
        width: 1200,
        height: 630,
        alt: "Prodway productivity workflows",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["./social-preview.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
};
