import HeaderItem from "./HeaderItem";
import HeaderLogo from "./HeaderLogo";

export default function NavHeader() {
  return (
    <div className="flex flex-row">
      <HeaderLogo />
      <HeaderItem title={"병원/센터찾기"} address={"/service/map"} />
    </div>
  );
}
