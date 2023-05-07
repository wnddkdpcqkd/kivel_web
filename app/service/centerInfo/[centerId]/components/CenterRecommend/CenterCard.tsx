import Image from "next/image";
import CenterInfoCell from "../../../../map/components/CenterInfoCell";

interface centerCardProps {
  isLastCell?: boolean;
}
export default function CenterCard({ isLastCell }: centerCardProps) {
  return (
    <div className="py-5">
      <img
        width={0}
        height={0}
        className="w-full aspect-[9/5] rounded-[18px]"
        src="https://img.freepik.com/free-vector/illustration-of-a-hospital_53876-81075.jpg?w=2000"
        alt=""
      />
      {/* <Image
        src="/free-vector/illustration-of-a-hospital_53876-81075.jpg?w=2000"
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-auto"
        alt={"asdasd"}
      /> */}
      <CenterInfoCell
        containerClass={`px-0 py-4 ${isLastCell ? "pb-0 border-b-0" : ""}`}
        type={"센터"}
        badges={[
          {
            backgroundColor: "bg-mint-20",
            text: "바로예약",
            textColor: "text-mint-90",
          },
          {
            backgroundColor: "bg-primary-10",
            text: "영업중",
            textColor: "text-primary-90",
          },
        ]}
        tags={["#언어재활", "#언어치료", "#감각통합치료", "#바우처"]}
        centerName={"키블아동치료센터"}
        distance={"12km"}
        address={"서울특별시 서초구 효령로 234 서초빌딩 2층"}
      />
    </div>
  );
}
