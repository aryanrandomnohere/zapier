import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import { Account, Session, User, Profile } from "next-auth";
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
      ): Promise<User | null> {
        if (!credentials?.email || !credentials?.password) return null;

        try {
          const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/login`;
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
        } catch (error) {
          console.error(
            "Credentials auth error:",
            //@ts-ignore gemini
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
    // @ts-ignore
    async signIn({
      user,
      account,
      profile,
    }: {
      user: User;
      account: Account;
      profile?: Profile;
    }) {
      try {
        if (account?.provider === "google") {
          console.log("Processing Google sign-in");
          console.log("Profile", profile);
          console.log("Sent Data", {
            //@ts-ignore gemini
            email_verified: profile?.email_verified,
            //@ts-ignore gemini
            firstname: profile?.given_name,
            //@ts-ignore gemini
            lastname: profile?.family_name,
            //@ts-ignore gemini
            picture: profile?.picture,
            //@ts-ignore gemini
            email: profile?.email,
          });
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/google`,
            {
              //@ts-ignore gemini
              email_verified: profile?.email_verified,
              //@ts-ignore gemini
              firstname: profile?.given_name,
              //@ts-ignore gemini
              lastname: profile?.family_name,
              //@ts-ignore gemini
              picture: profile?.picture,
              //@ts-ignore gemini
              email: profile?.email,
            },
            {
              withCredentials: true,
            },
          );

          console.log("Response from google", response.data);

          if (response.data.user) {
            user.backendToken = response.data.token;
            user.userId = response.data.user.id;
            user.zapmail = response.data.zapmail;
          }
        } else if (account?.provider === "credentials") {
          console.log(
            "Processing credentials sign-in - token available for cookie setting",
          );
        }

        return true;
      } catch (error) {
        // @ts-ignore
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
        token.userId = user.userId;
        token.zapmail = user.zapmail;
        if (user.backendToken) {
          token.backendToken = user.backendToken;
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
        session.user.userId = token.userId;
        session.user.zapmail = token.zapmail;
        if (token.backendToken) {
          session.user.backendToken = token.backendToken;
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
