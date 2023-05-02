import FilterButton from "@components/FilterButton";
import SearchInput from "@components/SearchInput";
import LocationFilter from "../LocationFilter";

export default function Header() {
  return (
    <div className="flex flex-row py-4">
      <SearchInput placeholder={"센터명, 지역 등을 검색해보세요"} />
      <LocationFilter></LocationFilter>
    </div>
  );
}
