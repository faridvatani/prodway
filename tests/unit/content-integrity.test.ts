import { describe, expect, it } from "vitest";
import {
  footerData,
  headerData,
  pricingTiers,
  testimonials,
} from "@/src/lib/constants";

describe("landing-page content integrity", () => {
  it("keeps header and footer navigation synchronized", () => {
    expect(footerData.footerLinks).toEqual(headerData.headerLinks);
    expect(new Set(headerData.headerLinks.map(({ name }) => name)).size).toBe(
      headerData.headerLinks.length,
    );
  });

  it("keeps stable, unique pricing identities and original prices", () => {
    expect(
      pricingTiers.map(({ title, monthlyPrice }) => [title, monthlyPrice]),
    ).toEqual([
      ["Free", 0],
      ["Pro", 9],
      ["Business", 19],
    ]);
    expect(new Set(pricingTiers.map(({ title }) => title)).size).toBe(
      pricingTiers.length,
    );
    expect(pricingTiers.filter(({ popular }) => popular)).toHaveLength(1);
  });

  it("provides unique stable testimonial keys", () => {
    expect(testimonials).toHaveLength(9);
    expect(new Set(testimonials.map(({ text }) => text)).size).toBe(
      testimonials.length,
    );
    expect(new Set(testimonials.map(({ username }) => username)).size).toBe(
      testimonials.length,
    );
  });
});
