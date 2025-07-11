import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      image: string;
      zapmail: string;
      userId: string;
    };
  }

  interface User {
    id: string;
    email: string;
    name: string;
    zapmail: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
  }
}
