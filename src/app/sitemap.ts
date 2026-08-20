import type { MetadataRoute } from "next";
import { siteConfig } from "@/src/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url.toString(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
