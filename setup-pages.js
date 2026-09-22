#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const pagesDir = path.join(__dirname, "pages");

// Create pages directory if it doesn't exist
if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir, { recursive: true });
  console.log("Created pages directory");
}

// Wrapper pages re-exporting the real components under src/app.
// NOTE: /pages is gitignored — this script is the source of truth for CI.
const pages = {
  _app: 'export { default } from "../src/app/shared/layout/_app";',
  _document: 'export { default } from "../src/app/shared/layout/_document";',
  index: 'export { default } from "../src/app/shared/layout/index";',
  product: 'export { default } from "../src/app/features/products/product";',
  cart: 'export { CartPage as default } from "../src/app/features/cart/index.page";',
  checkout: 'export { default } from "../src/app/features/checkout/checkout";',
  "order-confirmation":
    'export { default } from "../src/app/shared/layout/order-confirmation";',
  about: 'export { default } from "../src/app/features/marketing/about";',
  contact: 'export { default } from "../src/app/features/marketing/contact";',
  404: 'export { default } from "../src/app/shared/layout/404";',
};

for (const [page, line] of Object.entries(pages)) {
  const filePath = path.join(pagesDir, `${page}.tsx`);
  const content = `// Auto-generated wrapper - re-exports real component under src/app\n${line}\n`;

  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content);
    console.log(`Created pages/${page}.tsx`);
  }
}

console.log("Setup complete! Pages directory is ready.");
