export async function fetchApi<T>(
  url: string,
  options?: RequestInit
): Promise<T> {
  const res = await fetch(url, options);

  if (!res.ok) {
    const resFailed = await res.json();
    return resFailed?.message
      ? { ...resFailed, status: res.status }
      : ({
          message: "A server error has occurred. Please try again.",
          status: res.status,
        } as T);
  }

  const data: T = await res.json();
  return data;
}
