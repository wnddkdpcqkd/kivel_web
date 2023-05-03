import { useEffect, useState } from "react";

import Text from "@components/Text";
import Button from "@components/Button";
import { RefreshFill, RefreshLine } from "@components/svg";
import { colors } from "@components/color";
import CheckBox from "@components/CheckBox";

export default function CheckBoxModal({
  checkedItems,
  items,
  submit,
  modalVisible,
  setModalVisible,
}: {
  checkedItems: string[];
  items: string[];
  submit(value: string[]): void;
  modalVisible: boolean;
  setModalVisible(value: boolean): void;
}) {
  const [states, setStates] = useState<string[]>([]);

  useEffect(() => {
    setStates(checkedItems);
  }, [checkedItems]);

  const onClickItems = (value: string) => {
    if (states.find((x) => x === value)) {
      setStates(states.filter((x) => x !== value));
    } else {
      setStates((s) => [...s, value]);
    }
  };

  const refresh = () => {
    setStates([]);
  };

  const onClickSubmit = () => {
    submit(states);
    setModalVisible(false);
  };
  return (
    <div className={`p-4 rounded-2xl border-gray-30 border bg-white ${modalVisible ? "visible" : "hidden"}`}>
      <div className="max-h-60 overflow-y-scroll">
        {items.map((item, index) => (
          <div className="w-72">
            <CheckBox key={`unit_${index}`} text={item} onClick={onClickItems} selected={!!states?.find((x) => x === item)} />
          </div>
        ))}
      </div>

      <div className="flex flex-row justify-between items-center pt-2">
        <button onClick={refresh} className="flex items-center">
          <Text size="xs" className="text-gray-70 mr-1 h-auto">
            초기화
          </Text>
          <RefreshFill width={20} height={20} color={colors.gray[70]} />
        </button>

        <Button label="확인" onClick={onClickSubmit} />
      </div>
    </div>
  );
}
