import { colors } from "./color";
import { StarFill, StarHalf, StarLine } from "./svg";

export default function Stars({
  score,
  color = colors.gray[90],
  size = { width: 24, height: 24 },
}: {
  score: number;
  color?: string;
  size?: { width: number; height: number };
}) {
  return (
    <div className="flex">
      {new Array(5).fill(undefined).map((_, index) => {
        if (score - index >= 1) {
          return <StarFill key={`star_${index}`} color={color} width={size.width} height={size.height} />;
        } else if (score - index > 0.5) {
          return <StarHalf key={`star_${index}`} color={color} width={size.width} height={size.height} />;
        } else {
          return <StarLine key={`star_${index}`} color={color} width={size.width} height={size.height} />;
        }
      }, [])}
    </div>
  );
}
