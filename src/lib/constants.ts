import {
  Avatar1,
  Avatar2,
  Avatar3,
  Avatar4,
  Avatar5,
  Avatar6,
  Avatar7,
  Avatar8,
  Avatar9,
} from "@/src/assets";

import {
  BannerData,
  CallToActionData,
  FooterData,
  HeaderData,
  HeroData,
  PricingData,
  PricingTier,
  ProductShowcaseData,
  Testimonial,
  TestimonialsData,
} from "@/src/types/types";

// Static data
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
  primaryButton: { name: "Get for free", href: "#" },
  secondaryButton: { name: "Learn more", href: "#" },
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

// Pricing tier data
export const pricingTiers: PricingTier[] = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

// Testimonial data
export const testimonials: Testimonial[] = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: Avatar1,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: Avatar2,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: Avatar3,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: Avatar4,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: Avatar5,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: Avatar6,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: Avatar7,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: Avatar8,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: Avatar9,
    name: "Casey Harper",
    username: "@casey09",
  },
];
