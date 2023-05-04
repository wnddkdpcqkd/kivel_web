import Script from "next/script";
import Head from "next/head";
import { Map } from "./components/Map";
import CenterInfoCell from "./components/CenterInfoCell";
import { colors } from "@components/color";

export default function page() {
  return (
    // wrapper
    <div className="flex flex-1 min-h-0">
      {/* sidebar */}
      <aside className="min-h-full h-0 pr-[1.875rem] flex-shrink-0 overflow-y-scroll sticky overflow-x-hidden scrollbar-hide border-r border-r-gray-30">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => {
          return (
            <CenterInfoCell
              key={index}
              type={"센터"}
              badges={[
                { backgroundColor: "bg-mint-20", text: "바로예약", textColor: "text-mint-90" },
                { backgroundColor: "bg-primary-10", text: "영업중", textColor: "text-primary-90" },
              ]}
              tags={["언어재활", "언어치료", "감각통합치료", "바우처"]}
              centerName={"키블아동치료센터"}
              distance={"12km"}
              address={"서울특별시 서초구 효령로 234 서초빌딩 2층"}
            />
          );
        })}
      </aside>
      {/* <div className="flex flex-col pr-[1.875rem] border-r min-h-0 border-r-gray-30  bg-slate-100 relative ">
        <div className="">
          
        </div>
      </div> */}
      <div className="flex-grow">
        <Map />
      </div>
    </div>
  );
}
