import { api } from "@/app/lib/api";
import { USERS_URL } from "@/app/lib/service-url";
import { buildQueryString } from "@/app/utils/queryStringBuilder.util";
import type { putUserRequest, User } from "./type";

export const getAllUsers = async (
  request?: User | Record<string, unknown>,
): Promise<User[]> => {
  const res = await api.get<User[]>(
    `${USERS_URL}${buildQueryString(request as Record<string, unknown>)}`,
  );
  return res.data ?? [];
};

export const putUser = async (
  id: number | string,
  request: putUserRequest,
): Promise<User> => {
  const res = await api.put<User>(`${USERS_URL}/${id}`, request);
  return res.data as User;
};

export const deleteUser = async (id: number | string): Promise<unknown> => {
  const res = await api.delete<unknown>(`${USERS_URL}/${id}`);
  return res.data;
};
