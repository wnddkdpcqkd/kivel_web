import Badge from "@components/Badge";
import Stars from "@components/Stars";
import Text from "@components/Text";
import { colors } from "@components/color";

interface tagNameStarReviewProps {
  type: string;
  tags: { tag: string; textColor: string; backgroundColor: string }[];
  name: string;
  star: number;
  reviewCount: number;
}

export default function TagNameStarReview({ name, reviewCount, star, tags, type }: tagNameStarReviewProps) {
  return (
    <div className="">
      {/* type, tags */}
      <div className="flex items-center mb-3">
        <Text size="s" className="text-gray-70">
          {type}
        </Text>

        <div className="w-[1px] h-[14px] bg-gray-70 mx-2"></div>

        <div className="flex gap-x-2">
          {tags?.map((item, index) => {
            return (
              <Badge textSize="s" key={index} text={item.tag} backgroundColor={item.backgroundColor} textColor={item.textColor}></Badge>
            );
          })}
        </div>
      </div>

      {/* name */}
      <Text weight={600} size="xl">
        {name}
      </Text>

      {/* 리뷰 */}
      <div className="flex mt-2.5 items-center">
        <Stars score={star} />
        <div className="ml-2">
          <Text size="l">{star.toFixed(1)}</Text>
        </div>

        <div className="w-[1px] h-5 bg-gray-30 mx-2" />

        <div>
          <Text size="l">{`리뷰 ${reviewCount}`}</Text>
        </div>
      </div>
    </div>
  );
}
