import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#001E80",
      secondary: "#EAEEFE",
      white: "#FFFFFF",
      black: "#000000",
      transparent: "transparent",
      lightBlue: "#D2DCFF",
      darkBlue: "#010D3E",
      gray: "#BCBCBC",
      lightGray: "#F1F1F1",
      darkGray: "#222",
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          lg: "80px",
        },
      },
    },
  },
  plugins: [],
};

export default config;
