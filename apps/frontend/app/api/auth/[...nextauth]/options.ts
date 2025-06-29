import Credentials from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";
import { Session } from "next-auth";

export default {
  providers: [
    Credentials({
      name: "Email and password",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "Enter Your Email Here",
        },
        firstname: { label: "firstname", type: "text", placeholder: "" },
        lastname: { label: "lastname", type: "text", placeholder: "" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log(credentials);

        // Here you'd typically validate the credentials against your DB
        // Return null if credentials are invalid
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // Mock user - replace with actual database validation
        return {
          id: "123",
          email: credentials.email,
          name: `${credentials.firstname} ${credentials.lastname}`,
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/sign-up",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: any }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (token && session.user) {
        session.user.id = token.id;
      }
      return session;
    },
  },
};
