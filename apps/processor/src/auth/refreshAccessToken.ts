import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config();
export async function refreshAccessToken(
  refreshToken: string,
): Promise<string> {
  try {
    console.log(
      process.env.GOOGLE_CLIENTID,
      process.env.GOOGLE_SECRET,
      refreshToken,
    );
    if (!refreshToken) throw new Error("Missing refresh token");
    console.log("Refreshing access token", refreshToken);
    const res = await axios.post(
      "https://oauth2.googleapis.com/token",
      {
        client_id: process.env.GOOGLE_CLIENTID,
        client_secret: process.env.GOOGLE_SECRET,
        refresh_token: refreshToken,
        grant_type: "refresh_token",
      },
      {
        withCredentials: true,
      },
    );
    return res.data.access_token;
  } catch (error) {
    console.log("Error refreshing access token", error);
    throw error;
  }
}
