/**
 * Centralised API endpoint URLs.
 * Reads from NEXT_PUBLIC_* env vars with sensible MockAPI fallbacks.
 */

const BASE =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://6872883376a5723aacd50d06.mockapi.io";

export const PRODUCTS_URL =
  process.env.NEXT_PUBLIC_PRODUCTS_URL || `${BASE}/product`;

export const CATEGORIES_URL =
  process.env.NEXT_PUBLIC_CATEGORIES_URL || `${BASE}/categories`;

export const FAQS_URL =
  process.env.NEXT_PUBLIC_FAQS_URL || `${BASE}/faqs`;

export const TESTIMONIAL_URL =
  process.env.NEXT_PUBLIC_TESTIMONIALS_URL || `${BASE}/testimonials`;

export const USERS_URL = `${BASE}/users`;
export const LOGIN_URL = `${BASE}/login`;
export const REGISTER_URL = `${BASE}/register`;
