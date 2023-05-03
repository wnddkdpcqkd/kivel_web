"use client";
import Button from "@components/Button";
import CheckBox from "@components/CheckBox";
import SelectionMark from "@components/SelectionMark";
import Text from "@components/Text";
import { colors } from "@components/color";
import { ChevronRight, RefreshFill } from "@components/svg";
import { useState } from "react";

export default function LocationFilterModal({
  modalVisible,
  setModalVisible,
  onClickSubmit,
}: {
  modalVisible: boolean;
  setModalVisible(value: boolean): void;
  onClickSubmit(value: string[]): void;
}) {
  const [sido, setSido] = useState<string>("");
  const [addr1, setAddr1] = useState<string>("");
  const [selected, setSelected] = useState<string[]>([]);

  const submit = () => {
    if (selected.length) {
      const result = selected.map((item) => {
        if (item == addr1) {
          return sido + " " + addr1;
        } else {
          return sido + " " + addr1 + " " + item;
        }
      });
      onClickSubmit(result);
    }
    setModalVisible(false);
  };

  const refresh = () => {
    setSido("");
    setAddr1("");
    setSelected([]);
  };

  const onClickSido = (value: string) => {
    setSido(value);
    setAddr1("");
  };

  const onClickAddr1 = (value: string) => {
    const isExistAddr2 = !!locationArr.find((x) => x.sido == sido)?.sigungu.find((x) => x.addr1 == value)?.addr2.length;
    if (isExistAddr2) {
      setSelected([]);
    } else {
      setSelected([value]);
    }
    setAddr1(value);
  };

  const onClickAddr2 = (value: string) => {
    if (selected.find((x) => x === value)) {
      setSelected(selected.filter((x) => x !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  const onClickSelectionMark = (value: string) => {
    if (value == addr1) {
      setAddr1("");
      setSelected([]);
    } else {
      setSelected(selected.filter((x) => x !== value));
    }
  };

  return (
    <div className={`${modalVisible ? "visible" : "hidden"} border border-gray-30 rounded-2xl p-4 min-w-[480px] bg-white mt-2`}>
      <div className="flex flex-row gap-x-2">
        {selected.map((item, index) => (
          <SelectionMark key={index} size="s" text={item} onClick={onClickSelectionMark} />
        ))}
      </div>

      <div className="max-h-80 overflow-y-scroll">
        <div className="flex flex-row mt-4">
          <div className={`flex flex-col`}>
            {locationArr.map((item, index) => {
              return <SiButton key={`si_${index}`} onClick={onClickSido} text={item.sido} selected={item.sido == sido} />;
            })}
          </div>

          <div className={`w-[1px] bg-gray-30 mx-4`} />

          <div className={`grid grid-cols-2 gap-x-4 grid-flow-row h-min`}>
            {locationArr
              .find((x) => x.sido == sido)
              ?.sigungu.map((item, index) => {
                return <SiGunGuButton key={`sigungu_${index}`} onClick={onClickAddr1} text={item.addr1} selected={item.addr1 == addr1} />;
              })}
          </div>

          <div className={`w-[1px] bg-gray-30 mx-4`} />

          {!!locationArr.find((x) => x.sido == sido)?.sigungu.find((x) => x.addr1 == addr1)?.addr2.length && (
            <div className="grid grid-cols-1 h-min">
              {locationArr
                .find((x) => x.sido == sido)
                ?.sigungu.find((x) => x.addr1 == addr1)
                ?.addr2.map((item, index) => {
                  return (
                    <CheckBox key={`checkbox_${index}`} onClick={onClickAddr2} text={item} selected={!!selected.find((x) => x == item)} />
                  );
                })}
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-row justify-between items-center pt-2">
        <button onClick={refresh} className="flex items-center">
          <Text size="xs" className="text-gray-70 mr-1 h-auto">
            초기화
          </Text>
          <RefreshFill width={20} height={20} color={colors.gray[70]} />
        </button>
        <div>
          <Button label="확인" onClick={submit} />
        </div>
      </div>
    </div>
  );
}

function SiButton({ text, onClick, selected }: { text: string; onClick(value: string): void; selected: boolean }) {
  return (
    <button onClick={() => onClick(text)}>
      <div className={`flex flex-row items-center p-1.5 rounded-md mb-0.5`}>
        <div className={`relative w-16 flex-row flex justify-center items-center`}>
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

function SiGunGuButton({ text, onClick, selected }: { text: string; onClick(value: string): void; selected: boolean }) {
  return (
    <button onClick={() => onClick(text)}>
      <div className={`p-1.5 ${selected ? "bg-primary-10" : "bg-white"} rounded-md mb-0.5`}>
        <Text size="s" className={`${selected ? "text-primary-90" : "text-gray-90"} w-16`}>
          {text}
        </Text>
      </div>
    </button>
  );
}

const locationArr: { sido: string; sigungu: { addr1: string; addr2: string[] }[] }[] = [
  {
    sido: "서울",
    sigungu: [
      { addr1: "종로구", addr2: [] },
      { addr1: "중구", addr2: [] },
      { addr1: "용산구", addr2: [] },
      { addr1: "성동구", addr2: [] },
      { addr1: "광진구", addr2: [] },
      { addr1: "동대문구", addr2: [] },
      { addr1: "중랑구", addr2: [] },
      { addr1: "성북구", addr2: [] },
      { addr1: "강북구", addr2: [] },
      { addr1: "도봉구", addr2: [] },
      { addr1: "노원구", addr2: [] },
      { addr1: "은평구", addr2: [] },
      { addr1: "서대문구", addr2: [] },
      { addr1: "마포구", addr2: [] },
      { addr1: "양천구", addr2: [] },
      { addr1: "강서구", addr2: [] },
      { addr1: "구로구", addr2: [] },
      { addr1: "금천구", addr2: [] },
      { addr1: "영등포구", addr2: [] },
      { addr1: "동작구", addr2: [] },
      { addr1: "관악구", addr2: [] },
      { addr1: "서초구", addr2: [] },
      { addr1: "강남구", addr2: [] },
      { addr1: "송파구", addr2: [] },
      { addr1: "강동구", addr2: [] },
    ],
  },
  {
    sido: "부산",
    sigungu: [
      { addr1: "중구", addr2: [] },
      { addr1: "서구", addr2: [] },
      { addr1: "동구", addr2: [] },
      { addr1: "영도구", addr2: [] },
      { addr1: "부산진구", addr2: [] },
      { addr1: "동래구", addr2: [] },
      { addr1: "남구", addr2: [] },
      { addr1: "북구", addr2: [] },
      { addr1: "해운대구", addr2: [] },
      { addr1: "사하구", addr2: [] },
      { addr1: "금정구", addr2: [] },
      { addr1: "강서구", addr2: [] },
      { addr1: "연제구", addr2: [] },
      { addr1: "수영구", addr2: [] },
      { addr1: "사상구", addr2: [] },
      { addr1: "기장군", addr2: [] },
    ],
  },
  {
    sido: "대구",
    sigungu: [
      { addr1: "중구", addr2: [] },
      { addr1: "동구", addr2: [] },
      { addr1: "서구", addr2: [] },
      { addr1: "남구", addr2: [] },
      { addr1: "북구", addr2: [] },
      { addr1: "수성구", addr2: [] },
      { addr1: "달서구", addr2: [] },
      { addr1: "달성군", addr2: [] },
    ],
  },
  {
    sido: "인천",
    sigungu: [
      { addr1: "중구", addr2: [] },
      { addr1: "동구", addr2: [] },
      { addr1: "미추홀구", addr2: [] },
      { addr1: "연수구", addr2: [] },
      { addr1: "남동구", addr2: [] },
      { addr1: "부평구", addr2: [] },
      { addr1: "계양구", addr2: [] },
      { addr1: "서구", addr2: [] },
      { addr1: "강화군", addr2: [] },
      { addr1: "옹진군", addr2: [] },
    ],
  },
  {
    sido: "광주",
    sigungu: [
      { addr1: "동구", addr2: [] },
      { addr1: "서구", addr2: [] },
      { addr1: "남구", addr2: [] },
      { addr1: "북구", addr2: [] },
      { addr1: "광산구", addr2: [] },
    ],
  },
  {
    sido: "대전",
    sigungu: [
      { addr1: "동구", addr2: [] },
      { addr1: "중구", addr2: [] },
      { addr1: "서구", addr2: [] },
      { addr1: "유성구", addr2: [] },
      { addr1: "대덕구", addr2: [] },
    ],
  },
  {
    sido: "울산",
    sigungu: [
      { addr1: "중구", addr2: [] },
      { addr1: "남구", addr2: [] },
      { addr1: "동구", addr2: [] },
      { addr1: "북구", addr2: [] },
      { addr1: "울주군", addr2: [] },
    ],
  },
  { sido: "세종", sigungu: [] },
  {
    sido: "경기",
    sigungu: [
      { addr1: "수원시", addr2: ["장안구", "권선구", "팔달구", "영통구"] },
      { addr1: "성남시", addr2: ["수정구", "중원구", "분당구"] },
      { addr1: "의정부시", addr2: [] },
      { addr1: "안양시", addr2: ["만안구", "동안구"] },
      { addr1: "부천시", addr2: [] },
      { addr1: "광명시", addr2: [] },
      { addr1: "평택시", addr2: [] },
      { addr1: "동두천시", addr2: [] },
      { addr1: "안산시", addr2: ["상록구", "단원구"] },
      { addr1: "고양시", addr2: ["덕양구", "일산동구", "일산서구"] },
      { addr1: "과천시", addr2: [] },
      { addr1: "구리시", addr2: [] },
      { addr1: "남양주시", addr2: [] },
      { addr1: "오산시", addr2: [] },
      { addr1: "시흥시", addr2: [] },
      { addr1: "군포시", addr2: [] },
      { addr1: "의왕시", addr2: [] },
      { addr1: "하남시", addr2: [] },
      { addr1: "용인시", addr2: ["처인구", "기흥구", "수지구"] },
      { addr1: "파주시", addr2: [] },
      { addr1: "이천시", addr2: [] },
      { addr1: "안성시", addr2: [] },
      { addr1: "김포시", addr2: [] },
      { addr1: "화성시", addr2: [] },
      { addr1: "광주시", addr2: [] },
      { addr1: "양주시", addr2: [] },
      { addr1: "포천시", addr2: [] },
      { addr1: "여주시", addr2: [] },
      { addr1: "연천군", addr2: [] },
      { addr1: "가평군", addr2: [] },
      { addr1: "양평군", addr2: [] },
    ],
  },
  {
    sido: "강원",
    sigungu: [
      { addr1: "춘천시", addr2: [] },
      { addr1: "원주시", addr2: [] },
      { addr1: "강릉시", addr2: [] },
      { addr1: "동해시", addr2: [] },
      { addr1: "태백시", addr2: [] },
      { addr1: "속초시", addr2: [] },
      { addr1: "삼척시", addr2: [] },
      { addr1: "홍천군", addr2: [] },
      { addr1: "횡성군", addr2: [] },
      { addr1: "영월군", addr2: [] },
      { addr1: "평창군", addr2: [] },
      { addr1: "정선군", addr2: [] },
      { addr1: "철원군", addr2: [] },
      { addr1: "화천군", addr2: [] },
      { addr1: "양구군", addr2: [] },
      { addr1: "인제군", addr2: [] },
      { addr1: "고성군", addr2: [] },
      { addr1: "양양군", addr2: [] },
    ],
  },
  {
    sido: "충북",
    sigungu: [
      { addr1: "청주시", addr2: ["상당구", "서원구", "흥덕구", "청원구"] },
      { addr1: "충주시", addr2: [] },
      { addr1: "제천시", addr2: [] },
      { addr1: "보은군", addr2: [] },
      { addr1: "옥천군", addr2: [] },
      { addr1: "영동군", addr2: [] },
      { addr1: "증평군", addr2: [] },
      { addr1: "진천군", addr2: [] },
      { addr1: "괴산군", addr2: [] },
      { addr1: "음성군", addr2: [] },
      { addr1: "단양군", addr2: [] },
    ],
  },
  {
    sido: "충남",
    sigungu: [
      { addr1: "천안시", addr2: ["동남구", "서북구"] },
      { addr1: "공주시", addr2: [] },
      { addr1: "보령시", addr2: [] },
      { addr1: "아산시", addr2: [] },
      { addr1: "서산시", addr2: [] },
      { addr1: "논산시", addr2: [] },
      { addr1: "계룡시", addr2: [] },
      { addr1: "당진시", addr2: [] },
      { addr1: "금산군", addr2: [] },
      { addr1: "부여군", addr2: [] },
      { addr1: "서천군", addr2: [] },
      { addr1: "청양군", addr2: [] },
      { addr1: "홍성군", addr2: [] },
      { addr1: "예산군", addr2: [] },
      { addr1: "태안군", addr2: [] },
    ],
  },
  {
    sido: "전북",
    sigungu: [
      { addr1: "전주시", addr2: ["완산구", "덕진구"] },
      { addr1: "군산시", addr2: [] },
      { addr1: "익산시", addr2: [] },
      { addr1: "정읍시", addr2: [] },
      { addr1: "남원시", addr2: [] },
      { addr1: "김제시", addr2: [] },
      { addr1: "완주군", addr2: [] },
      { addr1: "진안군", addr2: [] },
      { addr1: "무주군", addr2: [] },
      { addr1: "장수군", addr2: [] },
      { addr1: "임실군", addr2: [] },
      { addr1: "순창군", addr2: [] },
      { addr1: "고창군", addr2: [] },
      { addr1: "부안군", addr2: [] },
    ],
  },
  {
    sido: "전남",
    sigungu: [
      { addr1: "목포시", addr2: [] },
      { addr1: "여수시", addr2: [] },
      { addr1: "순천시", addr2: [] },
      { addr1: "나주시", addr2: [] },
      { addr1: "광양시", addr2: [] },
      { addr1: "담양군", addr2: [] },
      { addr1: "곡성군", addr2: [] },
      { addr1: "구례군", addr2: [] },
      { addr1: "고흥군", addr2: [] },
      { addr1: "보성군", addr2: [] },
      { addr1: "화순군", addr2: [] },
      { addr1: "장흥군", addr2: [] },
      { addr1: "강진군", addr2: [] },
      { addr1: "해남군", addr2: [] },
      { addr1: "영암군", addr2: [] },
      { addr1: "무안군", addr2: [] },
      { addr1: "함평군", addr2: [] },
      { addr1: "영광군", addr2: [] },
      { addr1: "장성군", addr2: [] },
      { addr1: "완도군", addr2: [] },
      { addr1: "진도군", addr2: [] },
      { addr1: "신안군", addr2: [] },
    ],
  },
  {
    sido: "경북",
    sigungu: [
      { addr1: "포항시", addr2: ["남구", "북구"] },
      { addr1: "경주시", addr2: [] },
      { addr1: "김천시", addr2: [] },
      { addr1: "안동시", addr2: [] },
      { addr1: "구미시", addr2: [] },
      { addr1: "영주시", addr2: [] },
      { addr1: "영천시", addr2: [] },
      { addr1: "상주시", addr2: [] },
      { addr1: "문경시", addr2: [] },
      { addr1: "경산시", addr2: [] },
      { addr1: "군위군", addr2: [] },
      { addr1: "의성군", addr2: [] },
      { addr1: "청송군", addr2: [] },
      { addr1: "영양군", addr2: [] },
      { addr1: "영덕군", addr2: [] },
      { addr1: "청도군", addr2: [] },
      { addr1: "고령군", addr2: [] },
      { addr1: "성주군", addr2: [] },
      { addr1: "칠곡군", addr2: [] },
      { addr1: "예천군", addr2: [] },
      { addr1: "봉화군", addr2: [] },
      { addr1: "울진군", addr2: [] },
      { addr1: "울릉군", addr2: [] },
    ],
  },
  {
    sido: "경남",
    sigungu: [
      { addr1: "창원시", addr2: ["의창구", "성산구", "마산합포구", "마산회원구", "진해구"] },
      { addr1: "진주시", addr2: [] },
      { addr1: "통영시", addr2: [] },
      { addr1: "사천시", addr2: [] },
      { addr1: "김해시", addr2: [] },
      { addr1: "밀양시", addr2: [] },
      { addr1: "거제시", addr2: [] },
      { addr1: "양산시", addr2: [] },
      { addr1: "의령군", addr2: [] },
      { addr1: "함안군", addr2: [] },
      { addr1: "창녕군", addr2: [] },
      { addr1: "고성군", addr2: [] },
      { addr1: "남해군", addr2: [] },
      { addr1: "하동군", addr2: [] },
      { addr1: "산청군", addr2: [] },
      { addr1: "함양군", addr2: [] },
      { addr1: "거창군", addr2: [] },
      { addr1: "합천군", addr2: [] },
    ],
  },
  {
    sido: "제주",
    sigungu: [
      { addr1: "제주시", addr2: [] },
      { addr1: "서귀포시", addr2: [] },
    ],
  },
];
