import Text from "@components/Text";
import { colors } from "@components/color";
import { TargetFill, TargetLine } from "@components/svg";

export default function MyLocation({ onClick }: { onClick(): void }) {
  return (
    <button id="myLocationBtn" onClick={onClick} className="py-2 px-3 bg-white rounded-[50px] flex shadow-lg active:scale-95 items-center">
      <TargetLine width={24} height={24} color={colors.gray[90]} />
      <Text size="s" className="ml-0.5">
        내 위치
      </Text>
    </button>
  );
}
