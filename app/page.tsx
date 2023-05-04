import Badge from "@components/Badge";
import BadgeTag from "@components/BadgeTag";
import FilterButton from "@components/FilterButton";
import { PersonFill } from "@svg";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <div className="">
        <BadgeTag text="라벨 입력" backgroundColor={"bg-purple-20"} textColor={"text-purple-80"} />
        <FilterButton selected={true} defaultText={"기관유형"} />
      </div>
    </>
  );
}
