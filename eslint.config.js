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
  // data-fetching effects — warn only
  {
    files: ["src/**/*.{ts,tsx}"],
    rules: {
      "react-hooks/set-state-in-effect": "warn",
      "react-hooks/purity": "warn",
    },
  },
  // Vendored shadcn/ui — don't refactor for style; these two rules would
  // otherwise fire on upstream embla hooks, skeleton placeholders, etc.
  {
    files: ["src/app/shared/ui/**/*.{ts,tsx}"],
    rules: {
      "react-hooks/set-state-in-effect": "off",
      "react-hooks/purity": "off",
    },
  },
];
