import { twMerge } from "tailwind-merge";
import Text from "./Text";

interface inputLabelProps {
  label: string;
  essential: boolean;
  warning?: boolean;
  warningMessage?: string;
  placeholder: string;
  value?: string;
  disabled?: boolean;
  setValue(value: string): void;
  inputClassName?: string;
  type?: string;
}
export default function InputLabel({
  essential,
  label,
  warning,
  warningMessage,
  placeholder,
  value,
  setValue,
  disabled,
  inputClassName,
  type,
}: inputLabelProps) {
  const onChangeText = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };

  return (
    <div className="flex">
      <div className="w-32 min-w-[8rem] flex items-center">
        <Text>{label}</Text>
        {essential && <Text className="ml-1 text-primary-90">·</Text>}
      </div>

      <input
        type={type}
        disabled={disabled}
        value={value}
        onChange={onChangeText}
        className={twMerge(`py-2.5 px-4 bg-gray-10 rounded-lg text-lg placeholder:text-gray-70 w-96 ${inputClassName}`)}
        placeholder={placeholder}
      />
    </div>
  );
}
