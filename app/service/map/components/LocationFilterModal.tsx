"use client";
import Text from "@components/Text";
import { ChevronRight } from "@components/svg";
import { useState } from "react";

export default function LocationFilterModal({ modalVisible, setModalVisible }: { modalVisible: boolean; setModalVisible(): void }) {
  const [si, setSi] = useState<string>("전체");
  const [gungu, setGungu] = useState<string>();
  return (
    <div
      className={`${
        modalVisible ? "visible" : "hidden"
      } border border-gray-30 rounded-2xl p-4 flex flex-row max-h-60 max-w-[600px] min-w-[600px]`}
    >
      <div className={`flex flex-col`}>
        {locationArr.map((item, index) => {
          return <SiButton key={`si_${index}`} onClick={setSi} text={item.si} selected={item.si == si} />;
        })}
      </div>

      <div className={`w-[1px] bg-gray-30 mx-2`} />

      <div className={`flex-wrap`}>
        {locationArr
          .find((x) => x.si == si)
          ?.gungu.map((item, index) => {
            return <GunGuButton key={`gungu_${index}`} onClick={setGungu} text={item} selected={item == gungu} />;
          })}
      </div>
    </div>
  );
}

function SiButton({ text, onClick, selected }: { text: string; onClick(value: string): void; selected: boolean }) {
  return (
    <button onClick={() => onClick(text)}>
      <div className={`flex flex-row items-center p-1.5 rounded-md mb-0.5`}>
        <div className={`relative w-[60px] flex-row flex justify-center items-center`}>
          <Text size="s" className={`${selected ? "text-primary-90" : "text-gray-90"} `}>
            {text}
          </Text>
          {selected && (
            <div className="absolute right-0 w">
              <ChevronRight color={"#FF693A"} width={16} height={16} />
            </div>
          )}
        </div>
      </div>
    </button>
  );
}

function GunGuButton({ text, onClick, selected }: { text: string; onClick(value: string): void; selected: boolean }) {
  return (
    <button onClick={() => onClick(text)}>
      <div className={`p-1.5 ${selected ? "bg-primary-10" : "bg-white"} rounded-md mb-0.5`}>
        <Text size="s" className={`${selected ? "text-primary-90" : "text-gray-90"} w-[60px]`}>
          {text}
        </Text>
      </div>
    </button>
  );
}

const locationArr = [
  { si: "전체", gungu: [] },
  {
    si: "서울",
    gungu: [
      "종로구",
      "중구",
      "용산구",
      "성동구",
      "광진구",
      "동대문구",
      "중랑구",
      "성북구",
      "강북구",
      "도봉구",
      "노원구",
      "은평구",
      "서대문구",
      "마포구",
      "양천구",
      "강서구",
      "구로구",
      "금천구",
      "영등포구",
      "동작구",
      "관악구",
      "서초구",
      "강남구",
      "송파구",
      "강동구",
    ],
  },
  {
    si: "부산",
    gungu: [
      "중구",
      "서구",
      "동구",
      "영도구",
      "부산진구",
      "동래구",
      "남구",
      "북구",
      "해운대구",
      "사하구",
      "금정구",
      "강서구",
      "연제구",
      "수영구",
      "사상구",
      "기장군",
    ],
  },
  {
    si: "대구",
    gungu: ["중구", "동구", "서구", "남구", "북구", "수성구", "달서구", "달성군"],
  },
  {
    si: "인천",
    gungu: ["중구", "동구", "미추홀구", "연수구", "남동구", "부평구", "계양구", "서구", "강화군", "옹진군"],
  },
  {
    si: "광주",
    gungu: ["동구", "서구", "남구", "북구", "광산구"],
  },
  {
    si: "대전",
    gungu: ["동구", "중구", "서구", "유성구", "대덕구"],
  },
  {
    si: "울산",
    gungu: ["중구", "남구", "동구", "북구", "울주군"],
  },
  { si: "세종", gungu: [""] },
  {
    si: "경기",
    gungu: [
      "수원시 장안구",
      "수원시 권선구",
      "수원시 팔달구",
      "수원시 영통구",
      "성남시 수정구",
      "성남시 중원구",
      "성남시 분당구",
      "의정부시",
      "안양시 만안구",
      "안양시 동안구",
      "부천시",
      "광명시",
      "평택시",
      "동두천시",
      "안산시 상록구",
      "안산시 단원구",
      "고양시 덕양구",
      "고양시 일산동구",
      "고양시 일산서구",
      "과천시",
      "구리시",
      "남양주시",
      "오산시",
      "시흥시",
      "군포시",
      "의왕시",
      "하남시",
      "용인시 처인구",
      "용인시 기흥구",
      "용인시 수지구",
      "파주시",
      "이천시",
      "안성시",
      "김포시",
      "화성시",
      "광주시",
      "양주시",
      "포천시",
      "여주시",
      "연천군",
      "가평군",
      "양평군",
    ],
  },
  {
    si: "강원",
    gungu: [
      "춘천시",
      "원주시",
      "강릉시",
      "동해시",
      "태백시",
      "속초시",
      "삼척시",
      "홍천군",
      "횡성군",
      "영월군",
      "평창군",
      "정선군",
      "철원군",
      "화천군",
      "양구군",
      "인제군",
      "고성군",
      "양양군",
    ],
  },
  {
    si: "충북",
    gungu: [
      "청주시 상당구",
      "청주시 서원구",
      "청주시 흥덕구",
      "청주시 청원구",
      "충주시",
      "제천시",
      "보은군",
      "옥천군",
      "영동군",
      "증평군",
      "진천군",
      "괴산군",
      "음성군",
      "단양군",
    ],
  },
  {
    si: "충남",
    gungu: [
      "천안시 동남구",
      "천안시 서북구",
      "공주시",
      "보령시",
      "아산시",
      "서산시",
      "논산시",
      "계룡시",
      "당진시",
      "금산군",
      "부여군",
      "서천군",
      "청양군",
      "홍성군",
      "예산군",
      "태안군",
    ],
  },
  {
    si: "전북",
    gungu: [
      "전주시 완산구",
      "전주시 덕진구",
      "군산시",
      "익산시",
      "정읍시",
      "남원시",
      "김제시",
      "완주군",
      "진안군",
      "무주군",
      "장수군",
      "임실군",
      "순창군",
      "고창군",
      "부안군",
    ],
  },
  {
    si: "전남",
    gungu: [
      "목포시",
      "여수시",
      "순천시",
      "나주시",
      "광양시",
      "담양군",
      "곡성군",
      "구례군",
      "고흥군",
      "보성군",
      "화순군",
      "장흥군",
      "강진군",
      "해남군",
      "영암군",
      "무안군",
      "함평군",
      "영광군",
      "장성군",
      "완도군",
      "진도군",
      "신안군",
    ],
  },
  {
    si: "경북",
    gungu: [
      "포항시 남구",
      "포항시 북구",
      "경주시",
      "김천시",
      "안동시",
      "구미시",
      "영주시",
      "영천시",
      "상주시",
      "문경시",
      "경산시",
      "군위군",
      "의성군",
      "청송군",
      "영양군",
      "영덕군",
      "청도군",
      "고령군",
      "성주군",
      "칠곡군",
      "예천군",
      "봉화군",
      "울진군",
      "울릉군",
    ],
  },
  {
    si: "경남",
    gungu: [
      "창원시 의창구",
      "창원시 성산구",
      "창원시 마산합포구",
      "창원시마산합포구",
      "창원시 마산회원구",
      "창원시마산회원구",
      "창원시 진해구",
      "진주시",
      "통영시",
      "사천시",
      "김해시",
      "밀양시",
      "거제시",
      "양산시",
      "의령군",
      "함안군",
      "창녕군",
      "고성군",
      "남해군",
      "하동군",
      "산청군",
      "함양군",
      "거창군",
      "합천군",
    ],
  },
  { si: "제주", gungu: ["제주시", "서귀포시"] },
];