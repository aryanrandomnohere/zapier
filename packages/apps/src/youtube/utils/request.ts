// utils/request.ts
export interface RequestOptions {
  endpoint: string;
  method?: "GET" | "POST";
  token: string;
  params?: Record<string, string>;
  body?: any;
  baseUrl?: string;
}

export async function apiRequest<T>({
  endpoint,
  method = "GET",
  token,
  params = {},
  body,
  baseUrl = "https://www.googleapis.com/youtube/v3",
}: RequestOptions): Promise<T> {
  // Build query string
  const urlParams = new URLSearchParams(params).toString();
  const url = `${baseUrl}${endpoint}${urlParams ? `?${urlParams}` : ""}`;

  // Prepare options
  const options: RequestInit = {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  if (body) options.body = JSON.stringify(body);

  // Fetch data
  const response = await fetch(url, options);

  if (!response.ok) {
    let errorMessage = `API Error ${response.status}: ${response.statusText}`;
    try {
      const errorData = await response.json();
      errorMessage = errorData.error?.message || errorMessage;
      console.error("API Error Response:", errorData);
    } catch (e) {
      console.error("API Error with no JSON response");
    }
    throw new Error(errorMessage);
  }

  return response.json() as Promise<T>;
}
