import HeaderItem from "./HeaderItem";
import HeaderLogo from "./HeaderLogo";

export default function NavHeader() {
  return (
    <div className="flex flex-row gap-2 py-2.5">
      <HeaderLogo />
      <HeaderItem title={"병원/센터찾기"} address={"/service/map"} />
      <HeaderItem title={"콘텐츠"} address={"/service/contents"} />
      <HeaderItem title={"키블스토어"} address={"/service/store"} />
    </div>
  );
}
