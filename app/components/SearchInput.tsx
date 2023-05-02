import { Input } from "postcss";
import Text from "./Text";
import { SearchIcon } from "./svg";

interface propsType {
  placeholder: string;
}
export default function SearchInput({ placeholder }: propsType) {
  return (
    <div className="flex flex-row rounded-xl border border-gray-30 py-2 px-4 w-[400px]">
      <SearchIcon width={24} height={24} className="mr-4" />
      <input className={"flex placeholder:text-gray-70 w-full"} placeholder={placeholder} />
    </div>
  );
}
