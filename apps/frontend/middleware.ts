import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import { getSession } from "next-auth/react";
import axios from "axios";
export async function middleware(request: NextRequest) {
  const url = request.nextUrl;

  // Skip middleware for API routes and static files
  if (
    url.pathname.startsWith("/api") ||
    url.pathname.startsWith("/_next") ||
    url.pathname.startsWith("/favicon.ico")
  ) {
    return NextResponse.next();
  }

  const token = await getToken({
    req: request as any,
    secret: process.env.NEXTAUTH_SECRET,
  });

  // If no token and not already on sign-up or sign-in page → redirect

  if (!token) {
    const isPublicPath =
      url.pathname === "/" ||
      url.pathname === "/sign-up" ||
      url.pathname === "/sign-in";

    if (!isPublicPath) {
      return NextResponse.redirect(new URL("/sign-up", request.url));
    }
  } else {
    // If user is logged in and trying to visit login/signup page → redirect to dashboard
    if (
      url.pathname === "/sign-up" ||
      url.pathname === "/sign-in" ||
      url.pathname === "/"
    ) {
      return NextResponse.redirect(new URL("/home", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
