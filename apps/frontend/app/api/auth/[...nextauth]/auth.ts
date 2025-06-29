// app/api/auth/[...nextauth]/auth.ts
import { getServerSession } from "next-auth";
import authOptions from "./options"; // or wherever your config is

export function auth() {
  return getServerSession(authOptions);
}
