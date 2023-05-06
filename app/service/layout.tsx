import Script from "next/script";
import NavHeader from "./components/NavigationHeader";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    // <div className="flex bg-amber-200 h-screen">
    <>
      <Script
        strategy="beforeInteractive"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_MAP_KEY}`}
      ></Script>
      <div className="flex w-full max-w-7xl sm:mx-auto flex-col">
        <NavHeader />
        <main className="flex flex-1">{children}</main>
      </div>
    </>
    // </div>
  );
}
