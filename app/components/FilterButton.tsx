import Text from "./Text";
import { ChevronDown } from "./svg";

export default function FilterButton({
  selected,
  defaultText,
  buttonStyle,
  onClick,
}: {
  selected: boolean;
  defaultText: string;
  buttonStyle?: string;
  onClick?(): void;
}) {
  return (
    <button onClick={onClick}>
      <div
        className={`flex flex-row items-center px-3 py-1 border rounded-[40px]
      ${selected ? "bg-primary-10 border-primary-90" : "bg-white border-gray-30"}`}
      >
        <Text className={`${selected ? "text-primary-90" : "text-gray-70"} mr-1`}>{defaultText}</Text>
        <ChevronDown color={`${selected ? "#FF693A" : "#7F8BA4"}`} width={16} height={16} />
      </div>
    </button>
  );
}
