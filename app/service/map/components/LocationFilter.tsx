"use client";
import FilterButton from "@components/FilterButton";
import { useState } from "react";
import LocationFilterModal from "./LocationFilterModal";

export default function LocationFilter() {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  return (
    <div className="relative">
      <FilterButton onClick={() => setModalVisible((v) => !v)} selected={false} defaultText={"위치: 전체"} />

      <div className="absolute">
        <LocationFilterModal modalVisible={modalVisible} setModalVisible={() => setModalVisible(false)} />
      </div>
    </div>
  );
}
