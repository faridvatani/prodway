import js from "@eslint/js";
import nextVitals from "eslint-config-next/core-web-vitals";

const sourceFiles = ["**/*.{js,jsx,ts,tsx}"];

const eslintConfig = [
  { ignores: [".next/**", "coverage/**", "node_modules/**", "out/**"] },
  { ...js.configs.recommended, files: sourceFiles },
  ...nextVitals,
  {
    files: sourceFiles,
    rules: {
      "no-unused-vars": "warn",
      "no-console": "warn",
      "no-debugger": "error",
      "no-alert": "error",
      "no-eval": "error",
      "no-empty": "error",
      "no-undef": "warn",
      "no-var": "error",
      "react/no-array-index-key": "error",
      eqeqeq: ["error", "always"],
      curly: "error",
      strict: ["error", "global"],
    },
  },
];

export default eslintConfig;
