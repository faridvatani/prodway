import { StaticImageData } from "next/image";

export interface BannerData {
  title: string;
  link: {
    name: string;
    href: string;
  };
}

export interface HeaderData {
  headerLinks: { name: string; href: string }[];
  cta: string;
}

export interface HeroData {
  tag: string;
  title: string;
  description: string;
  primaryButton: string;
  secondaryButton: string;
}

export interface ProductShowcaseData {
  tag: string;
  title: string;
  description: string;
}

export interface PricingData {
  title: string;
  description: string;
  currency: string;
  billingPeriod: string;
}

export interface PricingTier {
  title: string;
  monthlyPrice: number;
  buttonText: string;
  popular: boolean;
  inverse: boolean;
  features: string[];
}

export interface Testimonial {
  text: string;
  imageSrc: StaticImageData;
  name: string;
  username: string;
}

export interface TestimonialsData {
  tag: string;
  title: string;
  description: string;
}

export interface CallToActionData {
  title: string;
  description: string;
  primaryButton: {
    name: string;
    href: string;
  };
  secondaryButton: { name: string; href: string };
}

export interface FooterData {
  footerLinks: { name: string; href: string }[];
  copyRight: string;
}
