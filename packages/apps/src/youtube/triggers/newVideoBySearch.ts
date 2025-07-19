export default async function newVideoBySearch(
  type: "test" | "polling",
  keywords:string,
  token: string,
  lastPolledAt: string,
) {
 
  const baseUrl = "https://youtube.googleapis.com/youtube/v3/search";
  const params = new URLSearchParams({
    part: "snippet",
    order: "date",
    q: keywords,
    maxResults: type === "test" ? "3" : "1",
  });

  if (type === "polling") {
    const publishedAfter = lastPolledAt
      ? new Date(lastPolledAt).toISOString()
      : new Date().toISOString();
    params.append("publishedAfter", publishedAfter);
  }

  const response = await fetch(`${baseUrl}?${params.toString()}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error("API Error:", errorData);
    throw new Error(`YouTube API error: ${errorData.error.message}`);
  }

  const data = await response.json();
  // console.log("YouTube API response:", data.item[0].snippet);
  if (!data?.items[0]?.snipped) return null;
  if (type === "test") {
    return data.items.map((item: any) => {
      return item.snippet;
    });
  } else {
    return data.items[0].snippet;
  }
}
// newVideoBySearch("polling", token, {lastPolledAt: "2025-07-08T00:00:00Z"})
