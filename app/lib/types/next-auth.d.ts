import NextAuth, { DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: number;
      name: string;
      email: string;
      accessToken: string;
      image: string;
      platform: string;
    };
  }
  interface User extends DefaultUser {
    platform?: string;
  }
}
