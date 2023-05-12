import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import KakaoProvider from "next-auth/providers/kakao";
import { getCookie, getCookies, setCookie } from "cookies-next";
import { type } from "os";
import { cookies } from "next/headers";
import axios from "axios";
import { now } from "next-auth/client/_utils";

async function auth(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, {
    providers: [
      CredentialsProvider({
        // The name to display on the sign in form (e.g. "Sign in with...")
        name: "Credentials",
        // `credentials` is used to generate a form on the sign in page.
        // You can specify which fields should be submitted, by adding keys to the `credentials` object.
        // e.g. domain, username, password, 2FA token, etc.
        // You can pass any HTML attribute to the <input> tag through the object.
        credentials: {
          email: { label: "email", type: "email", placeholder: "jsmith" },
          password: { label: "password", type: "password" },
        },
        async authorize(credentials, req) {
          // Add logic here to look up the user from the credentials supplied
          const res = await fetch("http://localhost:3000/api/login/credential", {
            method: "POST",
            headers: {
              "content-Type": "application/json",
            },
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
          });

          const user = await res.json();

          if (user) {
            // Any object returned will be saved in `user` property of the JWT
            return user;
          } else {
            // If you return null then an error will be displayed advising the user to check their details.
            return null;

            // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
          }
        },
      }),
      KakaoProvider({
        clientId: process.env.KAKAO_CLIENT_ID as string,
        clientSecret: process.env.KAKAO_CLIENT_SECRET as string,
      }),
    ],

    callbacks: {
      async jwt({ token, user }) {
        console.log(token, "at jwt");
        return token;
      },
      async session({ session, user, token }) {
        // 소셜 로그인 하면 => DB에서 해당 ID 불러와서 ( ID는 email로 사용할 예정 )
        // 있으면 => 로그인
        // 없으면 => 회원가입

        session.user = {
          email: token.email || "",
          accessToken: "",
          id: 1,
          image: now().toString(),
          name: "",
          platform: "kakao",
        };

        return session;
      },
      async signIn({ account, user, credentials, email, profile }) {
        const body = {
          id: user.id,
          email: user.email,
          role: cookies().get("userType")?.value,
          provider: "kakao",
        };

        try {
          const role = cookies().get("userType")?.value;
          if (account?.provider === "kakao") {
            const result = await axios.post("http://localhost:3000/api/login/social", body);
            if (result.data?.message?.includes("다른 소셜 계정이 존재합니다.")) {
            }
          }
        } catch (error) {
          console.log("error :", error);
        }

        return true;
        // 쿠키값 포함
        // 1. find email
        // 2. 정보 비교 =>
        //    2.1
        //    2.2 정보 있으면 ? platform 다르면? 다른 소셜 아이디가 있습니다. => login 실패
        //                   platform 같으면? login 성공 => 홈
        //    3.3 정보 없으면 ? login 성공 => 회원가입
      },
    },
  });
}

export { auth as GET, auth as POST };
