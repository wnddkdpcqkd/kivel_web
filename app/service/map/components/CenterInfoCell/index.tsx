import Badge from "@components/Badge";
import BadgeTag from "@components/BadgeTag";
import Text from "@components/Text";
import { colors } from "@components/color";
import { LocationFill } from "@components/svg";

interface CenterInfoCellProps {
  type: string;
  badges: { text: string; textColor: string; backgroundColor: string }[];
  tags: string[];
  centerName: string;
  distance: string;
  address: string;
}
export default function CenterInfoCell({ type, badges, tags, centerName, distance, address }: CenterInfoCellProps) {
  return (
    <div className="py-6 px-2 border-b border-gray-30">
      {/* badges */}
      <div className="flex flex-row mb-2.5 items-center">
        <Text size="s" className="text-gray-70">
          {type}
        </Text>
        <div className="w-[1px] h-4 py-0.5 bg-gray-30 m-2" />
        <div className="flex flex-row gap-1.5">
          {badges.map((item, index) => (
            <Badge key={`label_${index}`} {...item} textSize="s" />
          ))}
        </div>
      </div>

      {/* 센터명 */}
      <Text className="h-[1.875rem] font-semibold mb-2.5 " size="l">
        {centerName}
      </Text>

      <div className="flex flex-row mb-2.5 items-center">
        <LocationFill width={16} height={16} color={"#272E35"} />
        <Text className="ml-0.5">{distance}</Text>
        <Text className="ml-4">{address}</Text>
      </div>

      <div className="flex flex-row mb-2.5 gap-1.5 items-center">
        {tags.map((item, index) => (
          <BadgeTag key={`tag_${index}`} backgroundColor={colors.gray[10]} text={item} textColor={colors.gray[70]} />
        ))}
      </div>
    </div>
  );
}
