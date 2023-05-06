import SocialButtons from "@components/SocialButtons";
import TagNameStarReview from "./TagNameStarReview";

export default function Header() {
  const onClickButton = (url?: string) => {
    if (url) {
      window.open(url);
    } else {
      alert("등록된 홈페이지가 없습니다.");
    }
  };

  const onClickInstagram = (url?: string) => {
    if (url) {
      window.open(url);
    } else {
      alert("등록된 인스타그램 계정이 없습니다.");
    }
  };

  const onClickBog = (url?: string) => {
    if (url) {
      window.open(url);
    } else {
      alert("등록된 블로그가 없습니다..");
    }
  };

  return (
    <div className="flex w-full justify-between">
      <TagNameStarReview
        type={"센터"}
        tags={[
          { tag: "바로예약", backgroundColor: "bg-mint-20", textColor: "text-mint-90" },
          { tag: "영업중", backgroundColor: "bg-primary-10", textColor: "text-primary-90" },
        ]}
        name={"키블아동치료발달센터"}
        star={8}
        reviewCount={182}
      />

      <div className="flex items-end">
        <SocialButtons onClickHome={onClickButton} onClickInstagram={onClickInstagram} onClickBlog={onClickBog} />
      </div>
    </div>
  );
}
