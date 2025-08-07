import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import { Session, User } from "next-auth";
import bcrypt from "bcryptjs";
import { prisma } from "@repo/db";
import axios from "axios";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Email and Password",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(
        credentials: Record<"email" | "password", string> | undefined,
      ): Promise<any | null> {
        if (!credentials?.email || !credentials?.password) return null;

        try {
          const url = "http://localhost:3001/api/v1/auth/login";
          console.log("Credentials login attempt for:", credentials.email);

          const response = await axios.post(
            url,
            {
              email: credentials.email,
              password: credentials.password,
            },
            {
              withCredentials: true,
            },
          );

          if (!response.data.user) {
            console.log("No user found");
            return null;
          }

          const user = response.data.user;
          return {
            id: user.id.toString(),
            name: `${user.firstname || ""} ${user.lastname || ""}`.trim(),
            email: user.email,
            image: user.imageUrl || null,
            userId: user.id,
            zapmail: user.zapmail,
            backendToken: response.data.token,
          };
        } catch (error: any) {
          console.error(
            "Credentials auth error:",
            error.response?.data || error.message,
          );
          return null;
        }
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENTID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
      allowDangerousEmailAccountLinking: true,
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },

  callbacks: {
    async signIn({
      user,
      account,
      profile,
    }: {
      user: User;
      account: any;
      profile?: any;
    }) {
      try {
        if (account?.provider === "google") {
          console.log("Processing Google sign-in");

          const response = await axios.post(
            `http://localhost:3001/api/v1/auth/google`,
            {
              email_verified: profile?.email_verified,
              firstname: profile?.given_name,
              lastname: profile?.family_name,
              picture: profile?.picture,
              email: profile?.email,
            },
            {
              withCredentials: true,
            },
          );

          console.log("Response from google", response.data);

          if (response.data.user) {
            (user as any).userId = response.data.user.id;
            (user as any).zapmail = response.data.zapmail;
          }
        } else if (account?.provider === "credentials") {
          console.log(
            "Processing credentials sign-in - token available for cookie setting",
          );
        }

        return true;
      } catch (error: any) {
        console.error("Sign-in error:", error.response?.data || error.message);
        return false;
      }
    },

    async jwt({
      token,
      user,
    }: {
      token: JWT;
      user?: User | undefined;
    }): Promise<JWT> {
      if (user) {
        token.userId = (user as any).userId;
        token.zapmail = (user as any).zapmail;
        if ((user as any).backendToken) {
          token.backendToken = (user as any).backendToken;
        }
      }
      return token;
    },

    async session({
      session,
      token,
    }: {
      session: Session;
      token: JWT;
    }): Promise<Session> {
      if (session.user) {
        (session.user as any).userId = token.userId;
        (session.user as any).zapmail = token.zapmail;
        if (token.backendToken) {
          (session.user as any).backendToken = token.backendToken;
        }
      }
      return session;
    },
  },

  pages: {
    signIn: "/sign-up",
  },
};

export default authOptions;
