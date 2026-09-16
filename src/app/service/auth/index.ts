import { api } from "@/app/lib/api";
import { LOGIN_URL, REGISTER_URL } from "@/app/lib/service-url";
import type { Auth } from "./type";

export const login = async (request: Auth): Promise<unknown> => {
  const res = await api.post<unknown>(`${LOGIN_URL}`, request);
  return res.data;
};

export const register = async (request: Auth): Promise<unknown> => {
  const res = await api.post<unknown>(`${REGISTER_URL}`, request);
  return res.data;
};
