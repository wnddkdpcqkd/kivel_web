"use client";
import CheckBoxModal from "@components/CheckBoxModal";
import FilterButton from "@components/FilterButton";

export default function TheraphyFilter({
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
      <FilterButton onClick={() => setModalVisible(!modalVisible)} selected={!!filterArr.length} defaultText={"기관유형"} />

      <div className={`absolute mt-2`}>
        <CheckBoxModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          submit={onClickSubmit}
          items={["언어치료", "인지치료", "ABA치료", "감통치료", "미술치료", "놀이치료", "치료치료", "치이료오"]}
          checkedItems={filterArr}
        />
      </div>
    </div>
  );
}
