"use client";
import SearchInput from "@components/SearchInput";
import SelectionMark from "@components/SelectionMark";
import LocationFilter from "./LocationFilter";
import CenterTypeFilter from "./CenterTypeFilter";
import TheraphyFilter from "./TheraphyFilter";
import { useState } from "react";
import Text from "@components/Text";
import { RefreshFill } from "@components/svg";
import { colors } from "@components/color";

export default function Header() {
  const [locationModalVisible, setLocationModalVisible] = useState<boolean>(false);
  const [centerTypeModalVisible, setCenterTypeModalVisible] = useState<boolean>(false);
  const [theraphyModalVisible, setTheraphyModalVisible] = useState<boolean>(false);

  const [locationFilter, setLocationFilter] = useState<string[]>([]);
  const [centerTypeFilter, setCenterTypeFilter] = useState<string[]>([]);
  const [theraphyFilter, setTheraphyFilter] = useState<string[]>([]);

  const clickLocationButton = (value: boolean) => {
    setLocationModalVisible(value);
    setCenterTypeModalVisible(false);
    setTheraphyModalVisible(false);
  };
  const clickCenterButton = (value: boolean) => {
    setLocationModalVisible(false);
    setCenterTypeModalVisible(value);
    setTheraphyModalVisible(false);
  };
  const clickTheraphyButton = (value: boolean) => {
    setLocationModalVisible(false);
    setCenterTypeModalVisible(false);
    setTheraphyModalVisible(value);
  };

  const refreshFilter = () => {
    setLocationFilter([]);
    setCenterTypeFilter([]);
    setTheraphyFilter([]);
  };
  return (
    <div>
      <div className="flex flex-row py-4 border-b border-gray-30 items-center ">
        <div className="mr-[1.875rem]">
          <SearchInput placeholder={"센터명, 지역 등을 검색해보세요"} />
        </div>
        <div className="items-center justify-center flex flex-row gap-2 ">
          <LocationFilter
            selected={!!locationFilter.length}
            modalVisible={locationModalVisible}
            setModalVisible={clickLocationButton}
            onClickSubmit={setLocationFilter}
          />
          <CenterTypeFilter
            filterArr={centerTypeFilter}
            modalVisible={centerTypeModalVisible}
            setModalVisible={clickCenterButton}
            onClickSubmit={setCenterTypeFilter}
          />
          <TheraphyFilter
            filterArr={theraphyFilter}
            modalVisible={theraphyModalVisible}
            setModalVisible={clickTheraphyButton}
            onClickSubmit={setTheraphyFilter}
          />
        </div>
      </div>

      <div
        className={`flex flex-row py-4 border-b border-gray-30 gap-x-2 items-center 
        ${locationFilter.length || centerTypeFilter.length || theraphyFilter.length ? "visible" : "hidden"}`}
      >
        <button onClick={refreshFilter} className="center flex flex-row items-center">
          <Text size="xs" className="text-gray-50 mr-1 h-auto">
            초기화
          </Text>
          <RefreshFill width={20} height={20} color={colors.gray[50]} />
        </button>
        {locationFilter.map((item) => {
          return <SelectionMark onClick={() => {}} text={item} size={"m"} />;
        })}
        {centerTypeFilter.map((item) => {
          return <SelectionMark onClick={() => setCenterTypeFilter(centerTypeFilter.filter((x) => x !== item))} text={item} size={"m"} />;
        })}
        {theraphyFilter.map((item) => {
          return <SelectionMark onClick={() => setTheraphyFilter(theraphyFilter.filter((x) => x !== item))} text={item} size={"m"} />;
        })}
      </div>
    </div>
  );
}
