import NextAuth from "next-auth";
import { DefaultSession, DefaultUser } from "next-auth";
import { JWT, DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      userId: number;
      zapmail: string;
      backendToken: string;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    userId: number;
    zapmail: string;
    backendToken: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    userId: number;
    zapmail: string;
    backendToken: string;
  }
}
