import Text from "@components/Text";
import { colors } from "@components/color";
import { BuildingIcon } from "@components/svg";

interface ceterProfileProps {
  imageUrl: string;
  centerName: string;
  centerNum: number;
  contactNum: number;
}
export default function CenterProfile({ imageUrl, centerName, centerNum, contactNum }: ceterProfileProps) {
  return (
    <div className="py-5 rounded-2xl border border-gray-30">
      <div className="px-5">
        <div className="flex flex-col min-w-[15rem] items-center justify-center border-b-gray-30 border-b pt-4 pb-6">
          <div className="flex items-center w-[60px] h-[60px] bg-gray-20 rounded-full justify-center">
            <BuildingIcon width={32} height={32} color={colors.gray[70]} />
          </div>
          <Text className="text-gray-70 mt-2.5">기관명</Text>
          <Text size="l" weight={600} className="mt-2.5">
            {centerName}
          </Text>
        </div>
      </div>
      <div className="mt-6 flex">
        <div className="flex flex-col flex-1 justify-between items-center">
          <Text className="text-gray-70">등록기관수</Text>
          <div className="flex items-center justify-center mt-2.5">
            <Text className="mr-1" size="l" weight={600}>
              {centerNum}
            </Text>
            <Text size="s">개</Text>
          </div>
        </div>
        <div className="flex flex-col flex-1 justify-between items-center">
          <Text className="text-gray-70">문의내역</Text>
          <div className="flex items-center justify-center mt-2.5">
            <Text className="mr-1" size="l" weight={600}>
              {contactNum}
            </Text>
            <Text size="s">개</Text>
          </div>
        </div>
      </div>
    </div>
  );
}
