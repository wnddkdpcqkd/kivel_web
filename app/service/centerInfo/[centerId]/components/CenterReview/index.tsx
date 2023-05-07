import Text from "@components/Text";
import ReviewHeader from "./ReviewHeader";
import ReviewCell from "./ReviewCell";

export default function CenterReview() {
  const count = 187;
  return (
    <div>
      <Text weight={600} size="xl" className="mb-8">{`리뷰 ${count}`}</Text>

      <ReviewHeader totalScore={4.0} />

      <div className="h-3" />
      <ReviewCell
        imgUrl={""}
        name={"행복한 키코"}
        score={5.0}
        title={"치료사 선생님의 친절한 상담이 인상깊었어요."}
        content={
          "아이 언어가 조금 걱정돼서 발달 센터 처음 가봤는데 선생님들이 너무 친절하셔서 좋았어요. 우리 아이 발달 상태를 자세하게 분석 상담해주시고 다음 발달 이정표도 잘 알려주셨어요. 앞으로 아이 발달 걱정될 때 이 꼭 이 발달 센터로 올 거예요."
        }
      />
      <ReviewCell
        imgUrl={""}
        name={"행복한 키코"}
        score={5.0}
        title={"치료사 선생님의 친절한 상담이 인상깊었어요."}
        content={
          "아이 언어가 조금 걱정돼서 발달 센터 처음 가봤는데 선생님들이 너무 친절하셔서 좋았어요. 우리 아이 발달 상태를 자세하게 분석 상담해주시고 다음 발달 이정표도 잘 알려주셨어요. 앞으로 아이 발달 걱정될 때 이 꼭 이 발달 센터로 올 거예요."
        }
      />
      <ReviewCell
        imgUrl={""}
        name={"행복한 키코"}
        score={5.0}
        title={"치료사 선생님의 친절한 상담이 인상깊었어요."}
        content={
          "아이 언어가 조금 걱정돼서 발달 센터 처음 가봤는데 선생님들이 너무 친절하셔서 좋았어요. 우리 아이 발달 상태를 자세하게 분석 상담해주시고 다음 발달 이정표도 잘 알려주셨어요. 앞으로 아이 발달 걱정될 때 이 꼭 이 발달 센터로 올 거예요."
        }
      />
    </div>
  );
}
