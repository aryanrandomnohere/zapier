import { apiRequest } from "../utils/request.js";

export default async function newVideoBySearch(
  type: "test" | "polling",
  keywords: string,
  token: string,
  lastPolledAt: string,
) {
  const params: Record<string, string> = {
    part: "snippet",
    order: "date",
    q: keywords,
    maxResults: type === "test" ? "3" : "1",
  };

  if (type === "polling") {
    params.publishedAfter = lastPolledAt
      ? new Date(lastPolledAt).toISOString()
      : new Date().toISOString();
  }

  const data = await apiRequest<any>({
    endpoint: "/search",
    token,
    params,
    baseUrl: "https://youtube.googleapis.com/youtube/v3",
  });

  if (!data.items || data.items.length === 0) {
    console.log("No videos found.");
    return;
  }

  return type === "test"
    ? data.items.map((item: any) => item.snippet)
    : data.items[0].snippet;
}
