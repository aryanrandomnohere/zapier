import { apiRequest } from "../utils/request.js";

export default async function newVideoInPlaylist(
  type: "test" | "polling",
  playlistId: string,
  token: string,
  lastPolledAt?: string,
) {
  const params: Record<string, string> = {
    part: "snippet",
    playlistId,
    maxResults: type === "test" ? "3" : "1",
  };

  const data = await apiRequest<any>({
    endpoint: "/playlistItems",
    token,
    params,
    baseUrl: "https://youtube.googleapis.com/youtube/v3",
  });

  if (!data.items || data.items.length === 0) {
    console.log("No new videos in playlist.");
    return;
  }

  // YouTube doesn't expose published date on playlistItems reliably.
  // Optional: you can store videoId to deduplicate yourself.

  return type === "test"
    ? data.items.map((item: any) => item.snippet)
    : data.items[0].snippet;
}
