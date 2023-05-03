"use client";
import FilterButton from "@components/FilterButton";
import { useState } from "react";
import LocationFilterModal from "./LocationFilterModal";

export default function LocationFilter({
  selected,
  modalVisible,
  setModalVisible,
  onClickSubmit,
}: {
  selected: boolean;
  modalVisible: boolean;
  setModalVisible(value: boolean): void;
  onClickSubmit(value: string[]): void;
}) {
  return (
    <div className="relative">
      <FilterButton onClick={() => setModalVisible(!modalVisible)} selected={selected} defaultText={"위치"} />

      <div className="absolute">
        <LocationFilterModal onClickSubmit={onClickSubmit} modalVisible={modalVisible} setModalVisible={setModalVisible} />
      </div>
    </div>
  );
}
