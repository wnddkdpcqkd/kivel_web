import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import KakaoProvider from "next-auth/providers/kakao";
import { getCookie, getCookies, setCookie } from "cookies-next";
import { type } from "os";
import { cookies } from "next/headers";

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
          const res = await fetch(
            "http://localhost:3000/api/login/credential",
            {
              method: "POST",
              headers: {
                "content-Type": "application/json",
              },
              body: JSON.stringify({
                email: credentials?.email,
                password: credentials?.password,
              }),
            }
          );

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
        profile(profile, tokens) {
          return profile;
        },
      }),
    ],

    callbacks: {
      async session({ session, user, token }) {
        // 소셜 로그인 하면 => DB에서 해당 ID 불러와서 ( ID는 email로 사용할 예정 )
        // 있으면 => 로그인
        // 없으면 => 회원가입

        // session.user = {
        //   email :
        // }
        return session;
      },
      async signIn({ account, user, credentials, email, profile }) {
        console.log("이거아님?", cookies().get("userType")?.value);
        // 쿠키값 포함
        // 1. find email
        // 2. 정보 비교 =>
        //    2.1 platform 다르면 ? 다른 소셜 아이디가 있습니다. => login 실패
        //    2.2 정보 있으면 ? login 성공 => 홈
        //    3.3 정보 없으면 ? login 성공 => 회원가입
        return true;
      },
    },
    pages: {
      signIn: "/auth/signIn",
    },
  });
}

export { auth as GET, auth as POST };
