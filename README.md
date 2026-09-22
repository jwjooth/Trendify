# Trendify — Modern E-Commerce

![Next.js](https://img.shields.io/badge/Next.js-15-black) ![React](https://img.shields.io/badge/React-18-61dafb) ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6) ![Tailwind](https://img.shields.io/badge/Tailwind-4-38bdf8) ![Vitest](https://img.shields.io/badge/Vitest-tested-729b1b)

Fast, responsive fashion storefront. Browse → cart → checkout → confirmation, with search, filters, wishlist, and reviews.

> By [Jordan Theovandy](https://github.com/jwjooth)

## ✨ Features

| Area | What you get |
|------|--------------|
| 🛒 Shop flow | Catalog, product detail, cart, checkout, order confirmation |
| 🔍 Discovery | Search, category filter, recommendations |
| 💖 Engagement | Wishlist, reviews, testimonials, FAQs |
| 📱 UX | Responsive, animated (Motion), toasts (Sonner), dark mode (`next-themes`) |

## 🛠️ Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 15 (Pages Router) + React 18 + TypeScript |
| Styling / UI | Tailwind CSS 4, shadcn/ui + Radix, Lucide icons |
| State | React Context (`CartContext`) |
| Data | MockAPI.io via `src/app/lib/service-url.ts` |
| Test | Vitest + jsdom + Testing Library |

## 🚀 Run

```bash
npm install
cp .env.example .env.local   # optional — app falls back to public MockAPI
npm run dev                  # → http://localhost:3000
```

| Command | Purpose |
|---------|---------|
| `npm run dev` / `build` / `start` | Dev / production build / serve |
| `npm run lint` / `typecheck` | `eslint .` / `tsc --noEmit` |
| `npm run test` | `vitest run` (single: `vitest run <path>`) |

## 🧩 Structure

```
src/app/features/{products,cart,checkout,marketing}/  # routes + domain logic
src/app/shared/{layout,ui,hooks}/                     # shell, shadcn/Radix, hooks
src/app/service/ + lib/service-url.ts                 # API clients + endpoints
pages/                                                # auto-generated, gitignored (see setup-pages.js)
```

> ⚠️ Don't edit `pages/` by hand — edit `src/app/**`, it gets re-exported.
> Env: `NEXT_PUBLIC_*` only. No key? It still runs on built-in MockAPI fallbacks.

## 📄 License

MIT
