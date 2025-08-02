import { apiRequest } from "../utils/request.js";

export default async function newCommentOnVideo(
  videoId: string,
  token: string,
  type: "test" | "polling",
  lastPolledAt?: string,
) {
  const params: Record<string, string> = {
    part: "snippet",
    videoId,
    maxResults: type === "test" ? "3" : "1",
    order: "time",
    textFormat: "plainText",
  };

  const data = await apiRequest<any>({
    endpoint: "/commentThreads",
    token,
    params,
  });

  if (!data.items || data.items.length === 0) {
    console.log("❌ No comments found.");
    return;
  }

  if (type === "test") {
    return data.items.map((item: any) => item.snippet.topLevelComment.snippet);
  } else {
    const comment = data.items[0].snippet.topLevelComment.snippet;

    if (lastPolledAt) {
      const commentTime = new Date(comment.publishedAt).getTime();
      const lastPolledTime = new Date(lastPolledAt).getTime();
      if (commentTime <= lastPolledTime) {
        console.log("✅ No new comment since last poll");
        return;
      }
    }

    return comment;
  }
}
