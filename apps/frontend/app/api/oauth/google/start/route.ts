import { google } from "googleapis";

export async function GET(req:Request) {
   const { searchParams } = new URL(req.url);
  const userId = searchParams.get('userId');
  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENTID!,
    process.env.GOOGLE_SECRET!,
    "http://localhost:3000/api/oauth/google/callback", // This is the redirect_uri
  );

  const authUrl = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: [
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile",
    ],
    state:userId || ""
  });

  return Response.redirect(authUrl);
}
