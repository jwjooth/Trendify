 
const nextVitals = require("eslint-config-next/core-web-vitals");
const nextTs = require("eslint-config-next/typescript");

module.exports = [
  ...nextVitals,
  ...nextTs,
  {
    ignores: ["node_modules/**", ".next/**", "dist/**", "out/**"],
  },
  // Config/script files use require() — allow it there
  {
    files: ["*.js", "*.cjs", "*.mjs"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
  // react-hooks v7 experimental rules are overly strict for idiomatic
  // data-fetching effects and shadcn/ui vendored components — warn only
  {
    files: ["src/**/*.{ts,tsx}"],
    rules: {
      "react-hooks/set-state-in-effect": "warn",
      "react-hooks/purity": "warn",
    },
  },
];
