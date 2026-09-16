/**
 * Unified service types barrel.
 * Re-exports all domain types and defines shared UI types
 * (Product, filters, cart, checkout) used across hooks/components.
 */

export type ProductCategory =
  | "electronics"
  | "clothing"
  | "books"
  | "home"
  | "sports"
  | "beauty"
  | "accessories";

export type SortOption =
  | "newest"
  | "price-asc"
  | "price-desc"
  | "rating"
  | "price-low"
  | "price-high"
  | "popular";

export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  category?: string;
  imageUrl?: string;
  image_url?: string;
  stock?: number;
  rating?: number;
  reviewCount?: number;
  review_count?: number;
  sku?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  category_id?: number;
}

export interface ProductFilters {
  searchQuery?: string;
  search?: string;
  category?: ProductCategory | string;
  sortBy?: SortOption | string;
  sort_of?: string;
  sort_by?: string;
  minRating?: number;
  page?: number;
  limit?: number;
  page_limit?: number;
  [key: string]: unknown;
}

export interface Category {
  id?: string;
  name: string;
  category_name?: string;
  category_code?: string;
  category_id?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  totalItems: number;
  subtotal: number;
}

export interface SavedItem {
  product: Product;
  quantity: number;
}

export interface Address {
  fullName: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone?: string;
}

export type PaymentMethod =
  | "credit_card"
  | "debit_card"
  | "paypal"
  | "apple_pay"
  | "google_pay"
  | "bank_transfer"
  | "card"
  | "bank";

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  page?: number;
  limit?: number;
  sort_of?: string;
  sort_by?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  content?: string;
  avatar?: string;
  rating?: number;
  page?: number;
  limit?: number;
  sort_of?: string;
  sort_by?: string;
}

// Re-export domain request types for convenience
export type { Product as ProductType };
export type { createProductRequest } from "./products/type";
export type { Categories } from "./categories/type";
export type { Auth } from "./auth/type";
export type { User, putUserRequest } from "./user/type";
export type { FAQ as FAQType, createFAQRequest } from "./faqs/type";
export type {
  Testimonial as TestimonialType,
  createTestimonialRequest,
} from "./testimonial/type";
