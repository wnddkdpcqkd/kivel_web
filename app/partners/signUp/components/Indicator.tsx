import Text from "@components/Text";
import { colors } from "@components/color";
import { ChevronRight } from "@components/svg";

export default function Indicator({ index }: { index: number }) {
  return (
    <div className="mt-8">
      <Text size="xxl" weight={700}>
        기관 회원가입
      </Text>

      <div className="mt-5 gap-x-2 flex items-center">
        <Text weight={600} className={index == 0 ? "text-primary-90" : "text-gray-70"}>
          약관동의
        </Text>
        <ChevronRight width={18} height={18} color={index == 0 ? colors.primary[90] : colors.gray[70]} />
        <Text weight={600} className={index == 1 ? "text-primary-90" : "text-gray-70"}>
          회원정보 입력
        </Text>
        <ChevronRight width={18} height={18} color={index == 1 ? colors.primary[90] : colors.gray[70]} />
        <Text weight={600} className={index == 2 ? "text-primary-90" : "text-gray-70"}>
          회원가입 완료
        </Text>
      </div>
    </div>
  );
}
