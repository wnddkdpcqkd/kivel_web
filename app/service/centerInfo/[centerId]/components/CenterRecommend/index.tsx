import Text from "@components/Text";
import { colors } from "@components/color";
import { HospitalIcon } from "@components/svg";
import CenterCard from "./CenterCard";

interface centerRecommendProps {}
export default function CenterRecommend({}: centerRecommendProps) {
  const data = [1, 1];
  return (
    <div className="border-gray-30 border rounded-[18px] py-8 px-5">
      <div className="flex">
        <HospitalIcon width={24} height={24} color={colors.gray[90]} />
        <Text className="ml-1">주변 추천 치료기관</Text>
      </div>

      {data.map((item, index) => (
        <CenterCard key={index} isLastCell={index == data.length - 1} />
      ))}
    </div>
  );
}
