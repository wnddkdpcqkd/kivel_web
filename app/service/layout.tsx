/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import NavigationHeader from "@components/NavHeader";
import Text from "@components/Text";
import { LogoWithText } from "@components/svg";
import Link from "next/link";
import Script from "next/script";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    // <div className="flex bg-amber-200 h-screen">
    <>
      <Script
        strategy="beforeInteractive"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_MAP_KEY}`}
      ></Script>
      <div className="flex w-full max-w-7xl sm:mx-auto flex-col">
        <NavigationHeader
          Logo={
            <Link className="flex py-2.5" href={"/service"}>
              <LogoWithText />
              <Text className="text-primary-90 ml-1.5 mr-4">Service</Text>
            </Link>
          }
          leftItems={[
            { title: "병원/센터찾기", address: "/service/map" },
            { title: "콘텐츠", address: "/service/contents" },
            { title: "키블스토어", address: "/service/store" },
          ]}
        />
        <main className="flex flex-1">{children}</main>
      </div>
    </>
    // </div>
  );
}
