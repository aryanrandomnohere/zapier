import { prisma } from "@repo/db";
import axios from "axios";
import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  if (!state) return;
  const params = JSON.parse(state);

  if (!code || !params.userId) {
    return new Response("Missing code or userId parameter", { status: 400 });
  }

  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENTID!,
    process.env.GOOGLE_SECRET!,
    "http://localhost:3000/api/oauth/google/callback",
  );

  try {
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    // Fetch user's Google profile
    const oauth2 = google.oauth2({ auth: oauth2Client, version: "v2" });
    const userInfo = await oauth2.userinfo.get();
    const { email, name, picture } = userInfo.data;

    await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/createConnection/${params.zapId}`,
      {
        userId: Number(params.userId),
        appId: "google",
        identifier: email,
        access_token: tokens.access_token,
        refresh_token: tokens.refresh_token,
        expiry_date: tokens.expiry_date,
      },
    );

    return new Response(
      `
      <script>
        window.opener.postMessage(${JSON.stringify({
          status: "oauth-success",
          email,
          name,
          picture,
          services: ["youtube", "gmail", "drive", "calendar", "sheets", "docs"],
        })}, '*');
        window.close();
      </script>
    `,
      {
        headers: { "Content-Type": "text/html" },
      },
    );
  } catch (error) {
    console.error("OAuth callback error:", error);
    return new Response(
      `
      <script>
        window.opener.postMessage(${JSON.stringify({
          status: "oauth-error",
          error: "Failed to complete OAuth flow",
        })}, '*');
        window.close();
      </script>
    `,
      {
        headers: { "Content-Type": "text/html" },
      },
    );
  }
}

// // Helper function to get Google access token (works for all services)
// export const getGoogleAccessToken = async (userId: number) => {
//  await prisma.$transaction( async (tx)=> {
//   const connection = await prisma.userConnection.findFirst({
//     where: {
//       userId,
//       appId: "google",
//     }
//   });
//   prisma.trigger
//   })
//   const connection = await prisma.userConnection.findFirst({
//     where: {
//       userId,
//       appId: "google",
//     },
//   });

//   if (!connection) {
//     throw new Error(`No Google connection found for user ${userId}`);
//   }

//   // Check if token is expired
//   if (connection.expiredAt && new Date() > connection.expiredAt) {
//     // Refresh the token
//     const oauth2Client = new google.auth.OAuth2(
//       process.env.GOOGLE_CLIENTID!,
//       process.env.GOOGLE_SECRET!,
//       "http://localhost:3000/api/oauth/google/callback",
//     );

//     oauth2Client.setCredentials({
//       refresh_token: connection.refreshToken,
//     });

//     try {
//       const { credentials } = await oauth2Client.refreshAccessToken();

//       // Update the stored token
//       await prisma.userConnection.update({
//         where: { id: connection.id },
//         data: {
//           accessToken: credentials.access_token!,
//           expiredAt: new Date(credentials.expiry_date!),
//         },
//       });

//       return credentials.access_token!;
//     } catch (error) {
//       console.error("Token refresh failed:", error);
//       throw new Error("Failed to refresh access token");
//     }
//   }

//   return connection.accessToken;
// };
