import { PersonLine } from "@components/svg";
import HeaderItem from "./HeaderItem";
import HeaderLogo from "./HeaderLogo";
import Text from "@components/Text";
import { ReactNode } from "react";

interface navigationHeaderProps {
  Logo: ReactNode;
  leftItems: { title: string; address: string }[];
}
export default function NavigationHeader({
  Logo,
  leftItems,
}: navigationHeaderProps) {
  return (
    <div className="flex flex-row gap-2 py-2.5 justify-between">
      <div className="flex gap-2 itmes-center">
        {Logo}
        {leftItems?.map((item, index) => (
          <HeaderItem
            key={`headerLeft_${index}`}
            title={item.title}
            address={item.address}
          />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <button className="py-3 px-4 mr-2">
          <PersonLine width={24} height={24} />
        </button>
        <button className="py-3 px-4 mr-2">
          <Text className="text-primary-90">로그인</Text>
        </button>
      </div>
    </div>
  );
}
