export async function fetchApi<T>(
  url: string,
  options?: RequestInit
): Promise<T> {
  const res = await fetch(url, options);

  if (!res.ok) {
    const resFailed = await res.json();
    return resFailed?.message
      ? resFailed
      : ({ message: "A server error has occurred. Please try again." } as T);
  }

  const data: T = await res.json();
  return data;
}
