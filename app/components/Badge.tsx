import Text from "@components/Text";
export default function Badge({
  text,
  textSize = "m",
  textClass,
  textColor,
  backgroundColor,
  backgroundClassName,
}: {
  text: string;
  textSize?: "xs" | "s" | "m" | "l" | "xl" | "xxl";
  textClass?: string;
  backgroundColor: string;
  backgroundClassName?: string;
  textColor: string;
}) {
  return (
    <div className={`px-2.5 py-0.5 rounded-3xl items-center justify-center ${backgroundColor} ${backgroundClassName}`}>
      <Text className={`${textColor} ${textClass}`} size={textSize}>
        {text}
      </Text>
    </div>
  );
}
