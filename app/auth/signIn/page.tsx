"use client";
import Text from "@components/Text";
import { KaKaoLogo, NaverLogo } from "@components/svg";
import { signIn } from "next-auth/react";

import { useRef } from "react";
export default function signInPage() {
  const email = useRef("");
  const pw = useRef("");

  const onSubmit = async () => {
    const callbackUrl = new URL(location.href).searchParams.get("callbackUrl");
    const result = await signIn("credentials", {
      email: email.current,
      password: pw.current,
      redirect: true,
      callbackUrl: callbackUrl || "http://localhost:3000/partners",
    });
  };

  const onClickKakao = async () => {
    const callbackUrl = new URL(location.href).searchParams.get("callbackUrl");

    const result = await signIn("kakao", {
      redirect: true,
      callbackUrl: callbackUrl || "http://localhost:3000/partners",
    });
  };
  return (
    <div className="flex w-full justify-center items-center">
      <div className="w-80">
        <Text weight={700} size={"xxl"} className="mb-8">
          기관로그인
        </Text>

        <input
          onChange={(e) => (email.current = e.target.value)}
          className={"flex py-3 px-4 placeholder:text-gray-70 text-lg leading-7 bg-gray-10 rounded-lg mb-1 w-full"}
          placeholder={"아이디"}
        />
        <input
          onChange={(e) => (pw.current = e.target.value)}
          className={"flex py-3 px-4 placeholder:text-gray-70 text-lg leading-7 bg-gray-10 rounded-lg mb-10 w-full"}
          placeholder={"비밀번호"}
        />

        <button className="py-2.5 rounded-[50px] bg-primary-90 w-full" onClick={onSubmit}>
          <Text className="text-white">로그인</Text>
        </button>

        <div className="flex mt-4 items-center justify-center">
          <button>
            <Text className="text-gray-70">비밀번호를 잊으셨나요?</Text>
          </button>
          <div className="w-[1px] h-4 bg-gray-30 mx-4" />
          <button>
            <Text className="text-gray-70">회원가입</Text>
          </button>
        </div>

        <div className="flex flex-col items-center mt-8">
          <Text className="text-gray-50 mb-4">간편 로그인/회원가입</Text>
          <div className="flex gap-x-4">
            <button onClick={onClickKakao}>
              <KaKaoLogo />
            </button>
            <button>
              <NaverLogo />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
