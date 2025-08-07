import axios from "axios";

export async function refreshAccessToken(
  refreshToken: string,
): Promise<string> {
  if (!refreshToken) throw new Error("Missing refresh token");

  const res = await axios.post(
    "https://oauth2.googleapis.com/token",
    {
      client_id: process.env.YOUTUBE_CLIENT_ID,
      client_secret: process.env.YOUTUBE_CLIENT_SECRET,
      refresh_token: refreshToken,
      grant_type: "refresh_token",
    },
    {
      withCredentials: true,
    },
  );

  return res.data.access_token;
}
