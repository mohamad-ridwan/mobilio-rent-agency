"use server";

import { fetchApi } from "@/services/api/fetchApi";
import { APIBaseURL } from "./baseUrl";
import { CarListResponseType } from "@/types/api/cars";
import { cookies } from "next/headers";
import { mobilioSession } from "@/constants/storage";

export async function fetchCars(): Promise<CarListResponseType> {
  const cookieStore = await cookies();
  const auth_session = cookieStore.get(mobilioSession);
  const res = await fetchApi<CarListResponseType>(
    `${APIBaseURL}/agencies/cars/lists`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth_session?.value}`,
      },
    }
  );

  const result = res;
  if (!result?.data) {
    return { result: false, message: result.message };
  }

  return { ...result, result: true };
}
