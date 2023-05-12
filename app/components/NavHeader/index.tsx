"use client";
import { PersonLine } from "@components/svg";
import HeaderItem from "./HeaderItem";
import HeaderLogo from "./HeaderLogo";
import Text from "@components/Text";
import { ReactNode } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
interface navigationHeaderProps {
  Logo: ReactNode;
  leftItems: { title: string; address: string }[];
  loginButtonUrl: string;
}
export default function NavigationHeader({ Logo, leftItems, loginButtonUrl }: navigationHeaderProps) {
  const { data: session, status } = useSession();

  return (
    <div className="flex flex-row gap-2 py-2.5 justify-between">
      <div className="flex gap-2 itmes-center">
        {Logo}
        {leftItems?.map((item, index) => (
          <HeaderItem key={`headerLeft_${index}`} title={item.title} address={item.address} />
        ))}
      </div>
      <div className="flex items-center justify-center">
        {session && session.user ? (
          <div className="flex items-center justify-center">
            <Link href={"/partners/mypage"}>
              <PersonLine width={24} height={24} />
            </Link>
            <button className="py-3 px-4 mr-2" onClick={() => signOut()}>
              <Text className="text-primary-90">로그아웃</Text>
            </button>
          </div>
        ) : (
          <Link href={loginButtonUrl}>
            <Text className="text-primary-90 py-3 px-4 mr-2">로그인</Text>
          </Link>
          // <button className="" onClick={() => signIn()}>

          // </button>
        )}
      </div>
      <div>{(session?.expires, session?.user, status)}</div>
    </div>
  );
}
