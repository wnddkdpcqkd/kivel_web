import Table from "./components/Table";
import CenterProfile from "./components/CenterProfile";

export default function page() {
  return (
    <div className="flex w-full mt-8">
      <div>
        <CenterProfile imageUrl={""} centerName={"키블아동발달센터"} centerNum={3} contactNum={6} />
      </div>
      <div className="flex-1 px-10">
        <Table
          data={[
            { centerName: "키블 아동 치료 센터", centerType: "병원부설센터", date: "2023.05.01", index: 1, status: "등록 신청 완료" },
            { centerName: "키블 심리 상담 센터", centerType: "센터", date: "2022.12.30", index: 2, status: "등록 완료" },
            { centerName: "키블 가족 치료 센터", centerType: "병원부설센터", date: "2023.05.01", index: 3, status: "정보 확인중" },
          ]}
        />
      </div>
    </div>
  );
}
