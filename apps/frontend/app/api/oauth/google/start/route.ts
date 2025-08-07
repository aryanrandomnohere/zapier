// /app/api/oauth/google/route.ts
import { google } from "googleapis";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");
  const zapId = searchParams.get("zapId");
  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENTID!,
    process.env.GOOGLE_SECRET!,
    "http://localhost:3000/api/oauth/google/callback",
  );

  // Request ALL Google service scopes at once
  const allGoogleScopes = [
    // Basic profile
    "https://www.googleapis.com/auth/userinfo.email",
    "https://www.googleapis.com/auth/userinfo.profile",

    // YouTube
    "https://www.googleapis.com/auth/youtube.readonly",
    "https://www.googleapis.com/auth/youtube",
    "https://www.googleapis.com/auth/youtube.upload",
    "https://www.googleapis.com/auth/youtube.force-ssl",

    // // Gmail
    // "https://www.googleapis.com/auth/gmail.readonly",
    // "https://www.googleapis.com/auth/gmail.send",
    // "https://www.googleapis.com/auth/gmail.modify",

    // // Google Drive
    // "https://www.googleapis.com/auth/drive.readonly",
    // "https://www.googleapis.com/auth/drive.file",
    // "https://www.googleapis.com/auth/drive",

    // // Google Calendar
    // "https://www.googleapis.com/auth/calendar.readonly",
    // "https://www.googleapis.com/auth/calendar",

    // // Google Sheets
    // "https://www.googleapis.com/auth/spreadsheets.readonly",
    // "https://www.googleapis.com/auth/spreadsheets",

    // // Google Docs
    // "https://www.googleapis.com/auth/documents.readonly",
    // "https://www.googleapis.com/auth/documents",

    // // Google Photos
    // "https://www.googleapis.com/auth/photoslibrary.readonly",

    // // Google Analytics (if needed)
    // "https://www.googleapis.com/auth/analytics.readonly",
  ];
  console.log({
    zapId,
    userId,
  });
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: allGoogleScopes,
    state: JSON.stringify({
      zapId,
      userId,
    }),
    prompt: "consent", // Force consent to ensure refresh token
  });

  return Response.redirect(authUrl);
}
