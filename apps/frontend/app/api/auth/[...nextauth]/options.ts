import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import { prisma } from "@repo/db";
import { JWT } from "next-auth/jwt";
import { Session, TokenSet } from "next-auth";

export default {
  providers: [
    CredentialsProvider({
      name: "Email and Password",
      credentials: {
        email: { label: "Email", type: "text" },
        firstname: { label: "First name", type: "text" },
        lastname: { label: "Last name", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        let user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        const hashedPassword = await bcrypt.hash(credentials.password, 10);

        // If user doesn't exist, create
        if (!user) {
          user = await prisma.user.create({
            data: {
              email: credentials.email,
              firstname: credentials.firstname,
              zapmail: Date.now().toString(36),
              lastname: credentials.lastname,
              password: hashedPassword,
              type: "credentials",
              verified: false,
            },
          });
        }

        // Otherwise, return existing
        return {
          id: user.id.toString(),
          name: `${user.firstname || ""} ${user.lastname || ""}`,
          email: user.email,
          image: user.imageUrl || null,
        };
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENTID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
      allowDangerousEmailAccountLinking: true,
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET, // used for signing JWT
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
    encryption: false, // disables JWE encryption so your backend can decode
  },

  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email || profile?.email },
        });

        if (!existingUser) {
          const response = await prisma.user.create({
            data: {
              email: profile.email,
              firstname: profile.name?.split(" ")[0],
              lastname: profile.name?.split(" ")[1],
              imageUrl: profile.picture,
              zapmail: Date.now().toString(36),
              password: null,
              type: "google",
              verified: profile.email_verified,
            },
            select: {
              id: true,
              zapmail: true,
            },
          });
          console.log(response);
          user.userId = response.id;
          user.zapmail = response.zapmail;
        } else {
          user.userId = existingUser.id;
          user.zapmail = existingUser.zapmail;
        }
        return true;
      } catch (error) {
        console.error("Sign-in error:", error);
        return false;
      }
    },

    async jwt({ token, user }) {
      if (user) {
        token.userId = user.userId;
        token.zapmail = user.zapmail;
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user && token.userId) {
        session.user.userId = token.userId;
        session.user.zapmail = token.zapmail;
      }
      return session;
    },
  },

  pages: {
    signIn: "/sign-up",
  },
};
