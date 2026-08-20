import { describe, expect, it } from "vitest";
import manifest from "@/src/app/manifest";
import { metadata, viewport } from "@/src/app/metadata";
import robots from "@/src/app/robots";
import sitemap from "@/src/app/sitemap";
import { siteConfig } from "@/src/lib/site";
import { softwareApplicationJsonLd } from "@/src/lib/structured-data";

describe("site metadata", () => {
  it("uses one canonical production identity across metadata", () => {
    expect(siteConfig.url.toString()).toBe(
      "https://faridvatani.github.io/prodway/",
    );
    expect(metadata.metadataBase).toEqual(siteConfig.url);
    expect(metadata.title).toBe(siteConfig.title);
    expect(metadata.description).toBe(siteConfig.description);
    expect(metadata.openGraph).toMatchObject({
      siteName: siteConfig.name,
      title: siteConfig.title,
      description: siteConfig.description,
    });
    expect(metadata.twitter).toMatchObject({
      card: "summary_large_image",
      title: siteConfig.title,
      description: siteConfig.description,
    });
    expect(viewport.themeColor).toBe(siteConfig.themeColor);
  });

  it("publishes internally consistent crawler routes", () => {
    expect(robots()).toEqual({
      rules: { userAgent: "*", allow: "/" },
      sitemap: "https://faridvatani.github.io/prodway/sitemap.xml",
      host: "https://faridvatani.github.io",
    });
    expect(sitemap()).toEqual([
      {
        url: siteConfig.url.toString(),
        changeFrequency: "monthly",
        priority: 1,
      },
    ]);
  });

  it("keeps the web app manifest aligned with the site configuration", () => {
    expect(manifest()).toMatchObject({
      name: siteConfig.name,
      short_name: siteConfig.name,
      description: siteConfig.description,
      start_url: "./",
      scope: "./",
      display: "standalone",
      theme_color: siteConfig.themeColor,
    });
  });

  it("describes only claims supported by the product concept", () => {
    expect(softwareApplicationJsonLd).toEqual(
      expect.objectContaining({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: siteConfig.name,
        description: siteConfig.description,
        url: siteConfig.url.toString(),
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      }),
    );
  });
});
