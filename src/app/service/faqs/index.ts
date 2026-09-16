import { api } from "@/app/lib/api";
import { FAQS_URL } from "@/app/lib/service-url";
import { buildQueryString } from "@/app/utils/queryStringBuilder.util";
import type { createFAQRequest } from "./type";
import type { FAQ } from "../type";

export const getAllFaqs = async (
  request?: Record<string, unknown>,
): Promise<FAQ[]> => {
  const res = await api.get<FAQ[]>(`${FAQS_URL}${buildQueryString(request)}`);
  return res.data ?? [];
};

/** Short alias used by hooks/pages. */
export const getFaqs = async (): Promise<FAQ[]> => getAllFaqs();

export const getFaqsById = async (id: number | string): Promise<FAQ> => {
  const res = await api.get<FAQ>(`${FAQS_URL}/${id}`);
  return res.data as FAQ;
};

export const createFaq = async (
  request: createFAQRequest,
): Promise<FAQ> => {
  const res = await api.post<FAQ>(`${FAQS_URL}`, request);
  return res.data as FAQ;
};

export const updateFaq = async (
  id: number | string,
  request: createFAQRequest,
): Promise<FAQ> => {
  const res = await api.put<FAQ>(`${FAQS_URL}/${id}`, request);
  return res.data as FAQ;
};

export const deleteFaq = async (id: number | string): Promise<unknown> => {
  const res = await api.delete<unknown>(`${FAQS_URL}/${id}`);
  return res.data;
};
