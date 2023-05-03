"use client";
import CheckBoxModal from "@components/CheckBoxModal";
import FilterButton from "@components/FilterButton";
import { useState } from "react";

export default function CenterTypeFilter({
  filterArr,
  modalVisible,
  setModalVisible,
  onClickSubmit,
}: {
  filterArr: string[];
  modalVisible: boolean;
  setModalVisible(value: boolean): void;
  onClickSubmit(value: string[]): void;
}) {
  return (
    <div className="relative">
      <FilterButton onClick={() => setModalVisible(!modalVisible)} selected={!!filterArr.length} defaultText={"치료유형"} />

      <div className={`absolute mt-2 ${modalVisible ? "visible" : "hidden"}`}>
        <CheckBoxModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          submit={onClickSubmit}
          items={["병원", "센터", "보육원", "ㅇ이이", "이라ㅓㅇ리ㅏㅓ", "ㅁㄴ이ㅏㅓㄹㄴ이ㅏㅓㄹ", "ㅇ니ㅏ런아ㅣㅓㄹ"]}
          checkedItems={filterArr}
        />
      </div>
    </div>
  );
}
