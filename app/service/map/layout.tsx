import SearchInput from "@components/SearchInput";
import Header from "./components/Header";
import Script from "next/script";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex w-full flex-col">
        <div className="relative z-20">
          <Header />
        </div>
        <div className="flex flex-1 relative z-10  w-full">{children}</div>
      </div>
    </>
  );
}
