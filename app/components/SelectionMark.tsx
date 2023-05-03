"use client";
import Text from "./Text";
import { colors } from "./color";
import { CloseFill } from "./svg";

export default function SelectionMark({ text, size = "m", onClick }: { text: string; size: "s" | "m"; onClick(text: string): void }) {
  const className = size == "s" ? "py-0.5 px-2.5" : "py-1 px-3";
  return (
    <button onClick={() => onClick(text)} className={`flex flex-row bg-gray-20 rounded-[40px] items-center ${className}`}>
      <Text className="text-gray-70 mr-0.5" size={size}>
        {text}
      </Text>
      <CloseFill width={16} height={16} color={colors.gray[70]} />
    </button>
  );
}
