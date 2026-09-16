import { api } from "@/app/lib/api";
import { TESTIMONIAL_URL } from "@/app/lib/service-url";
import { buildQueryString } from "@/app/utils/queryStringBuilder.util";
import type { createTestimonialRequest } from "./type";
import type { Testimonial } from "../type";

export const getAllTestimonials = async (
  request?: Record<string, unknown>,
): Promise<Testimonial[]> => {
  const res = await api.get<Testimonial[]>(
    `${TESTIMONIAL_URL}${buildQueryString(request)}`,
  );
  return res.data ?? [];
};

/** Short alias used by hooks/pages. */
export const getTestimonials = async (): Promise<Testimonial[]> =>
  getAllTestimonials();

export const getTestimonialById = async (
  id: number | string,
): Promise<Testimonial> => {
  const res = await api.get<Testimonial>(`${TESTIMONIAL_URL}/${id}`);
  return res.data as Testimonial;
};

export const createTestimonial = async (
  request: createTestimonialRequest,
): Promise<Testimonial> => {
  const res = await api.post<Testimonial>(`${TESTIMONIAL_URL}`, request);
  return res.data as Testimonial;
};

export const putTestimonial = async (
  id: number | string,
  request: createTestimonialRequest,
): Promise<Testimonial> => {
  const res = await api.put<Testimonial>(`${TESTIMONIAL_URL}/${id}`, request);
  return res.data as Testimonial;
};

export const deleteTestimonial = async (
  id: number | string,
): Promise<unknown> => {
  const res = await api.delete<unknown>(`${TESTIMONIAL_URL}/${id}`);
  return res.data;
};
