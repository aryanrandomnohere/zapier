import NextAuth from "next-auth";
import config from "./options";
const handler = NextAuth(config);

export const GET = handler;
export const POST = handler;
