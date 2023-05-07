import Stars from "@components/Stars";
import Text from "@components/Text";

interface reviewCellProps {
  imgUrl: string;
  name: string;
  score: number;
  title: string;
  content: string;
}
export default function ReviewCell({ content, imgUrl, name, score, title }: reviewCellProps) {
  return (
    <div className="px-2 py-8 border-b border-gray-30">
      <div className="flex items-center">
        <img src="https://image.utoimage.com/preview/cp872722/2022/12/202212008462_206.jpg" className="h-12 w-12 rounded-full mr-4" />

        <div>
          <Text className="text-[1.25rem] leading-[1.875rem]">{name}</Text>
          <div className="flex items-center">
            <Stars className="gap-x-1 mr-2" size={{ width: 16, height: 16 }} score={score} />
            <Text>{score.toFixed(1)}</Text>
          </div>
        </div>
      </div>

      <Text className="mt-6" size="l">
        {title}
      </Text>

      <Text className="mt-4" weight={400}>
        {content}
      </Text>
    </div>
  );
}
