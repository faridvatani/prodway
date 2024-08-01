interface BannerData {
  title: string;
  link: {
    name: string;
    href: string;
  };
}

interface HeaderData {
  headerLinks: { name: string; href: string }[];
  cta: string;
}

interface HeroData {
  tag: string;
  title: string;
  description: string;
  primaryButton: string;
  secondaryButton: string;
}

interface ProductShowcaseData {
  tag: string;
  title: string;
  description: string;
}

interface PricingData {
  title: string;
  description: string;
  currency: string;
  billingPeriod: string;
}

interface TestimonialsData {
  tag: string;
  title: string;
  description: string;
}

interface CallToActionData {
  title: string;
  description: string;
  primaryButton: string;
  secondaryButton: string;
}

interface FooterData {
  footerLinks: { name: string; href: string }[];
  copyRight: string;
}

export const bannerData: BannerData = {
  title: "Streamline your workflow and boost your productivity",
  link: {
    name: "Get started for free",
    href: "#",
  },
};

export const headerData: HeaderData = {
  headerLinks: [
    { name: "About", href: "#" },
    { name: "Features", href: "#" },
    { name: "Customers", href: "#" },
    { name: "Updates", href: "#" },
    { name: "Help", href: "#" },
  ],
  cta: "Get for free",
};

export const heroData: HeroData = {
  tag: "Version 2.0 is here",
  title: "Pathway to productivity",
  description:
    "Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.",
  primaryButton: "Get for free",
  secondaryButton: "Learn more",
};

export const productShowcaseData: ProductShowcaseData = {
  tag: "Boost your productivity",
  title: "A more effective way to track progress",
  description:
    "Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.",
};

export const pricingData: PricingData = {
  title: "Pricing",
  description:
    "Free forever. Upgrade for unlimited tasks, better security, and exclusive features.",
  currency: "$",
  billingPeriod: "/month",
};

export const testimonialsData: TestimonialsData = {
  tag: "Testimonials",
  title: "What our users say",
  description:
    "From intuitive design to powerful features, our app has become an essential tool for users around the world.",
};

export const callToActionData: CallToActionData = {
  title: "Sign up for free today",
  description:
    "Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.",
  primaryButton: "Get for free",
  secondaryButton: "Learn more",
};

export const footerData: FooterData = {
  footerLinks: [
    { name: "About", href: "#" },
    { name: "Features", href: "#" },
    { name: "Customers", href: "#" },
    { name: "Updates", href: "#" },
    { name: "Help", href: "#" },
  ],
  copyRight: "2024 Your Company, Inc. All rights reserved.",
};
