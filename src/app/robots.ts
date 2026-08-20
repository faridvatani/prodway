import type { MetadataRoute } from "next";
import { siteConfig } from "@/src/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: new URL("sitemap.xml", siteConfig.url).toString(),
    host: siteConfig.url.origin,
  };
}
