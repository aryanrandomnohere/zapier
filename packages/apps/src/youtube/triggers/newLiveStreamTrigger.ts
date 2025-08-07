import { apiRequest } from "../utils/request.js";

export default async function newLiveStreamTrigger(
  type: "test" | "polling",
  channelId: string,
  token: string,
  lastPolledAt?: string,
) {
  const params: Record<string, string> = {
    part: "snippet",
    eventType: "live", // Only live streams
    type: "video", // Only videos (not channels/playlists)
    channelId, // Filter by channel
    order: "date",
    maxResults: type === "test" ? "3" : "1",
  };

  if (type === "polling" && lastPolledAt) {
    params.publishedAfter = new Date(lastPolledAt).toISOString();
  }

  const data = await apiRequest<any>({
    endpoint: "/search",
    token,
    params,
    baseUrl: "https://youtube.googleapis.com/youtube/v3",
  });

  if (!data.items || data.items.length === 0) {
    console.log("No new live streams.");
    return;
  }

  return type === "test"
    ? data.items.map((item: any) => item.snippet)
    : data.items[0].snippet;
}
