import Script from "next/script";
import Head from "next/head";
import { Map } from "./components/Map";
import CenterInfoCell from "./components/CenterInfoCell";
import { colors } from "@components/color";

export default function page() {
  return (
    <div className="flex bg-red-600 w-full h-full">
      <Map />

      <div>
        <CenterInfoCell
          type={"센터"}
          badges={[
            { backgroundColor: "bg-mint-20", text: "바로예약", textColor: "text-mint-90" },
            { backgroundColor: "bg-primary-30", text: "영업중", textColor: "text-primary-90" },
          ]}
          tags={["언어재활", "언어치료", "감각통합치료", "바우처"]}
          centerName={"키블아동치료센터"}
          distance={"12km"}
          address={"서울특별시 서초구 효령로 234 서초빌딩 2층"}
        />
      </div>
    </div>
  );
}
