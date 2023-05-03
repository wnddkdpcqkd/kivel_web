import Text from "@components/Text";
import { colors } from "@components/color";
import { CheckFill } from "@components/svg";

export default function CheckBox({ selected, text, onClick }: { selected: boolean; text: string; onClick(value: string): void }) {
  return (
    <button className="flex-row flex items-center py-3 rounded-lg" onClick={() => onClick(text)}>
      <CheckFill width={24} height={24} color={selected ? colors.primary[90] : colors.gray[30]} />
      <Text weight={400} className="ml-2.5">
        {text}
      </Text>
    </button>
  );
}
