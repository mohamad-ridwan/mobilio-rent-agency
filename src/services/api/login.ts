"use server";

import { APIBaseURL } from "@/services/api/baseUrl";
import { fetchApi } from "@/services/api/fetchApi";
import { ReqLogin, ResultLogin } from "@/types/api/login";

export async function fetchLogin(body: ReqLogin): Promise<ResultLogin> {
  const res = await fetchApi<ResultLogin>(`${APIBaseURL}/agencies/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const result = res;
  if (!result?.agency?.id) {
    return { result: false, message: result.message };
  }

  return { ...result, result: true };
}
