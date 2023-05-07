import Text from "@components/Text";
export default function BadgeTag({
  text,
  textClass,
  textColor,
  backgroundColor,
  backgroundClassName,
}: {
  text: string;
  textClass?: string;
  backgroundColor?: string;
  backgroundClassName?: string;
  textColor?: string;
}) {
  return (
    <div className={`px-1.5 rounded-md items-center justify-center bg-gray-20 ${backgroundColor} ${backgroundClassName}`}>
      <Text className={`${textColor} ${textClass} text-gray-70`} size="s">
        {text}
      </Text>
    </div>
  );
}
