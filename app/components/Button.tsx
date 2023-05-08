import { useMemo } from "react";
import Text from "./Text";
import { twMerge } from "tailwind-merge";

export default function Button({
  buttonClassName,
  textClassName,
  style = "fill",
  label,
  onClick,
}: {
  textClassName?: string;
  buttonClassName?: string;
  style?: "line" | "fill" | "disabled";
  label: string;
  onClick(): void;
}) {
  const textColor = useMemo(() => {
    if (style == "fill") {
      return "text-white";
    } else if (style == "line") {
      return "text-primary-90";
    } else {
      return "text-gray-70";
    }
  }, [style]);

  const bgColor = useMemo(() => {
    if (style == "fill") {
      return "bg-primary-90 border border-primary-90";
    } else if (style == "line") {
      return "bg-white border border-primary-90";
    } else {
      return "bg-gray-70 border border-gray-70";
    }
  }, [style]);

  return (
    <button onClick={onClick} className={twMerge(`py-2 px-5 rounded-lg ${bgColor} ${buttonClassName}`)}>
      <Text className={twMerge(`${textColor} ${textClassName}`)}>{label}</Text>
    </button>
  );
}
