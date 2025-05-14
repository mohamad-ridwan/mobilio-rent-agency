"use server";

import { APIBaseURL } from "@/services/api/baseUrl";
import { fetchApi } from "@/services/api/fetchApi";
import { ReqRegisterAgency, ResultRegister } from "@/types/api/register";

export async function fetchRegister(
  body: ReqRegisterAgency
): Promise<ResultRegister> {
  const res = await fetchApi<ResultRegister>(
    `${APIBaseURL}/agencies/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );

  const result = res;
  if (!result?.agency?.id) {
    return { result: false, message: result.message };
  }

  return { ...result, result: true };
}
