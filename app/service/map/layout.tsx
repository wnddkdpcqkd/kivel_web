import SearchInput from "@components/SearchInput";
import Header from "./components/Header";
import Script from "next/script";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        strategy="beforeInteractive"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_MAP_KEY}`}
      ></Script>
      <div className="w-full h-full bg-slate-300">
        <div className="relative z-20">
          <Header />
        </div>
        <div className="relative z-10">{children}</div>
      </div>
    </>
  );
}
