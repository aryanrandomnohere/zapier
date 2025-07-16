// /app/api/oauth/google/callback/route.ts

import { prisma } from "@repo/db";
import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";
// import { prisma } from '@/lib/prisma'

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");
  const userId = Number(url.searchParams.get("state"));

  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENTID!,
    process.env.GOOGLE_SECRET!,
    "http://localhost:3000/api/oauth/google/callback",
  );

  const { tokens } = await oauth2Client.getToken(code!);
  oauth2Client.setCredentials(tokens);
  // const { userId } = JSON.parse(state!)
  // ✅ Fetch user's Google profile
  const oauth2 = google.oauth2({ auth: oauth2Client, version: "v2" });
  const userInfo = await oauth2.userinfo.get();

  const { email, name, picture } = userInfo.data;
  console.log({ email, name, picture });

  console.log({
    // userId,
    appId: "google",
    accessToken: tokens.access_token!,
    refreshToken: tokens.refresh_token!,
    expiredAt: new Date(tokens.expiry_date!),
  });
  if(!userId) return;
    await prisma.userConnection.create({
      data: {
        userId : Number(userId),
        appId: 'google',
        identifier:'google',
        accessToken: tokens.access_token!,
        refreshToken: tokens.refresh_token! || "",
        expiredAt: new Date(tokens.expiry_date!)
      }
    })
  return new Response(
    `
    <script>
      window.opener.postMessage(${JSON.stringify({
        status: "oauth-success",
        email,
        name, 
        picture,
      })}, '*');
      window.close();
    </script>
  `,
    {
      headers: { "Content-Type": "text/html" },
    },
  );
  return NextResponse.redirect("http://localhost:3000/api/oauth/success");
}
