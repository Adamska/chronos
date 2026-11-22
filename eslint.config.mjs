import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
      "@next/next/no-img-element": "off",
    },
  },
  {
    files: ["src/scene/**/*.{ts,tsx}"],
    rules: { "react-hooks/immutability": "off" },
  },
  globalIgnores([".claude/**", ".next/**", "out/**", "build/**", "public/**", "next-env.d.ts", "playwright-report/**", "test-results/**"]),
]);
