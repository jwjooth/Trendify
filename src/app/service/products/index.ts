import { api } from "@/app/lib/api";
import { PRODUCTS_URL } from "@/app/lib/service-url";
import { buildQueryString } from "@/app/utils/queryStringBuilder.util";
import type { Product, ProductFilters, SortOption } from "../type";
import type { createProductRequest } from "./type";

export const getAllProducts = async (
  request?: ProductFilters | Record<string, unknown>,
  sortBy?: SortOption | string,
  limit?: number,
  page?: number,
): Promise<Product[]> => {
  const query = buildQueryString({
    ...(request as Record<string, unknown>),
    ...(sortBy ? { sort_by: sortBy } : {}),
    ...(limit !== undefined ? { limit } : {}),
    ...(page !== undefined ? { page } : {}),
  });
  const url = `${PRODUCTS_URL}${query}`;
  const res = await api.get<Product[]>(url);
  return res.data ?? [];
};

export const getProductById = async (
  id: number | string,
): Promise<Product> => {
  const url = `${PRODUCTS_URL}/${id}`;
  const res = await api.get<Product>(url);
  return res.data as Product;
};

export const createProduct = async (
  request: createProductRequest,
): Promise<Product> => {
  const res = await api.post<Product>(`${PRODUCTS_URL}`, request);
  return res.data as Product;
};

export const updateProduct = async (
  id: number | string,
  request: createProductRequest,
): Promise<Product> => {
  const res = await api.put<Product>(`${PRODUCTS_URL}/${id}`, request);
  return res.data as Product;
};

export const deleteProduct = async (
  id: number | string,
): Promise<unknown> => {
  const res = await api.delete<unknown>(`${PRODUCTS_URL}/${id}`);
  return res.data;
};
