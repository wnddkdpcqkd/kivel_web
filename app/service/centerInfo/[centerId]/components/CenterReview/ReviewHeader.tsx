import Stars from "@components/Stars";
import Text from "@components/Text";
import { colors } from "@components/color";

interface reviewHeaderProps {
  totalScore: number;
}
export default function ReviewHeader({ totalScore }: reviewHeaderProps) {
  return (
    <div className="flex ">
      {/* 별점 */}
      <div className="flex flex-col p-8 items-center pb-6 bg-gray-10 rounded-2xl justify-center mr-8">
        <Stars score={totalScore} color={colors.primary[90]} />
        <Text weight={600} size="xl" className="mt-6">
          {totalScore.toFixed(1)}
        </Text>
      </div>

      {/* 퍼센트 */}
      <div className="flex">
        <div className="flex flex-col gap-y-1.5 py-4 mr-6">
          <Text className="flex-1 text-gray-70" size="s">
            친절해요
          </Text>
          <Text className="flex-1 text-gray-70" size="s">
            설명이 자세해요
          </Text>
          <Text className="flex-1 text-gray-70" size="s">
            치료 후 결과가 좋아요
          </Text>
          <Text className="flex-1 text-gray-70" size="s">
            시설이 청결해요
          </Text>
        </div>

        <div className="flex flex-col gap-y-1.5 py-4 mr-6">
          <Bar percent={92} />
          <Bar percent={98} />
          <Bar percent={91} />
          <Bar percent={88} />
        </div>

        <div className="flex flex-col gap-y-1.5 py-4 mr-6">
          <Text className="flex-1" weight={600}>
            {`92  %`}
          </Text>
          <Text className="flex-1" weight={600}>
            {`98  %`}
          </Text>
          <Text className="flex-1" weight={600}>
            {`91  %`}
          </Text>
          <Text className="flex-1" weight={600}>
            {`88  %`}
          </Text>
        </div>
      </div>
    </div>
  );
}

const Bar = ({ percent }: { percent: number }) => {
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="w-[200px] bg-gray-20 h-2 rounded-[50px]">
        <div className={`bg-primary-90 h-2 rounded-[50px]`} style={{ width: percent * 2 }} />
      </div>
    </div>
  );
};
