"use server";

import { fetchApi } from "@/services/api/fetchApi";
import { APIBaseURL } from "./baseUrl";
import { CarListResponseType } from "@/types/api/cars";

export async function fetchCars(): Promise<CarListResponseType> {
  const res = await fetchApi<CarListResponseType>(
    `${APIBaseURL}/agencies/cars/lists`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const result = res;
  if (!result?.data) {
    return { result: false, message: result.message };
  }

  return { ...result, result: true };
}
