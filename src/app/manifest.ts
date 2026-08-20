import type { MetadataRoute } from "next";
import { siteConfig } from "@/src/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "./",
    scope: "./",
    display: "standalone",
    background_color: "#eaeefe",
    theme_color: siteConfig.themeColor,
    icons: [
      {
        src: "./icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
