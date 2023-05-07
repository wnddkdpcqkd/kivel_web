"use client";
import Body from "./Body";
import Header from "./Header";

export default function CenterInfoDetail() {
  return (
    <div className="w-full">
      <Header />
      <div className="h-1.5 bg-gray-20 my-8" />
      <Body
        homepage="https://www.kivel.kr/"
        phone="010-1234-5678"
        doroAddress={"강원도 춘천시 선수촌로 63번길 14-6 1층"}
        jibunAddress={"강원도 춘천시 선수동 1028-4 1층"}
        vouchers={["발달재활서비스", "아동청소년심리지원", "교육청치료비지원"]}
        centerIntro={`본 센터는 발달재활, 심리지원, 교육청 바우처지정기관으로 언어치료, 인지학습치료, 놀이치료, 모래놀이치료, 미술치료, 심리검사 등을 통하여 각 분야별 최고 연구원들이 모여 검사프로그램과 평가를 바탕으로 개개인의 아동 청소년의 특성에 맞는 1:1 맞춤 교육 프로그램을 제공하여 아동 청소년들이 보다 효과적으로 자신의 능력을 발견하고, 펼쳐 나아갈 수 있도록 끊임없는 노력과 연구를 하고 있습니다.`}
        treatmentArea={["언어치료", "감각통합치료", "미술치료", "운동치료"]}
        keyword={["언어재활", "언어치료", "감각통합치료", "바우처", "자세한 상담", "맞춤형 프로그램", "추천발달센터"]}
        businessHour={{
          mon: "09:00 - 18:00",
          tue: "09:00 - 18:00",
          wed: "09:00 - 18:00",
          thu: "09:00 - 18:00",
          fri: "09:00 - 18:00",
          sat: "09:00 - 18:00",
          sun: "09:00 - 18:00",
        }}
      />
    </div>
  );
}
