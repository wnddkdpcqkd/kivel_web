import { ReactNode } from "react";
import { useMemo } from "react";
import { twMerge } from "tailwind-merge";

export default function Text({
  size = "m",
  weight = 500,
  className,
  children,
}: {
  size?: "xs" | "s" | "m" | "l" | "xl" | "xxl";
  weight?: 400 | 500 | 600 | 700;
  className?: string | undefined;
  children: ReactNode;
}) {
  const fontFamily = useMemo(() => {
    if (weight == 400) {
      return;
    } else if (weight == 500) {
      return "font-medium";
    } else if (weight == 600) {
      return "font-semibold";
    } else if (weight == 700) {
      return "font-bold";
    }
  }, [weight]);

  const fontSize = useMemo(() => {
    if (size == "m") {
      return "leading-6";
    } else if (size == "xs") {
      return "text-xs leading-5";
    } else if (size == "s") {
      return "text-sm leading-[1.375rem]";
    } else if (size == "l") {
      return "text-xl leading-7";
    } else if (size == "xl") {
      return "text-[1.625rem] leading-9";
    } else if (size == "xxl") {
      return "text-[1.75rem] leading-[2.375rem]";
    }
  }, [size]);

  return <div className={twMerge(`text-gray-90 whitespace-pre-wrap ${fontFamily} ${fontSize} ${className}`)}>{`${children}`}</div>;
}
