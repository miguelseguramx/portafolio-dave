import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    // extend Next.js Core Web Vitals + TS defaults
    extends: ["next/core-web-vitals", "next/typescript"],
    rules: {
      // your existing React / Next overrides
      "react/no-unescaped-entities": "off",
      "@next/next/no-page-custom-font": "off",

      // allow `any` + remove module-boundary return-type requirements
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/ban-types": "off",
    },
  }),
];

export default eslintConfig;
