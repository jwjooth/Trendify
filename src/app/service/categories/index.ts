import { api } from "@/app/lib/api";
import { CATEGORIES_URL } from "@/app/lib/service-url";
import { buildQueryString } from "@/app/utils/queryStringBuilder.util";
import type { Categories } from "./type";
import type { Category } from "../type";

export const getAllCategories = async (
  request?: Categories | Record<string, unknown>,
): Promise<Category[]> => {
  const url = `${CATEGORIES_URL}${buildQueryString(
    request as Record<string, unknown>,
  )}`;
  const res = await api.get<Category[]>(url);
  return res.data ?? [];
};

/** Short alias used by hooks/pages. */
export const getCategories = async (): Promise<Category[]> =>
  getAllCategories();

export const getCategoryById = async (
  id: number | string,
): Promise<Category> => {
  const url = `${CATEGORIES_URL}/${id}`;
  const res = await api.get<Category>(url);
  return res.data as Category;
};

export const putCategory = async (
  id: number | string,
  request: Categories,
): Promise<Category> => {
  const res = await api.put<Category>(`${CATEGORIES_URL}/${id}`, request);
  return res.data as Category;
};

export const deleteCategory = async (
  id: number | string,
): Promise<unknown> => {
  const res = await api.delete<unknown>(`${CATEGORIES_URL}/${id}`);
  return res.data;
};
