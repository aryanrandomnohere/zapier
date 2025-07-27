export default async function newCommentOnVideo(
  videoId: string,
  token: string,
  type: "test" | "polling",
  lastPolledAt?: string,
) {
  const baseUrl = "https://www.googleapis.com/youtube/v3/commentThreads";
  const params = new URLSearchParams({
    part: "snippet",
    videoId,
    maxResults: type === "test" ? "3" : "1",
    order: "time", // newest first
    textFormat: "plainText",
  });

  const response = await fetch(`${baseUrl}?${params.toString()}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error("YouTube API Error:", errorData);
    throw new Error(`YouTube API error: ${errorData.error.message}`);
  }

  const data = await response.json();

  if (data.items.length === 0) {
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
