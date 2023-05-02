import Text from "@components/Text";

interface LocationCellButtonProps {
  text: string;
  onClick?(): void;
  selected: boolean;
}
export default function LocationCellButton({ text, onClick, selected }: LocationCellButtonProps) {
  return (
    <button onClick={onClick}>
      <div className={`w-[60px] p-1.5 ${selected ? "bg-primary-30" : "bg-white"}`}>
        <Text size="s" className={`${selected ? "text-primary-90" : "text-gray-90"}`}>
          {text}
        </Text>
      </div>
    </button>
  );
}
