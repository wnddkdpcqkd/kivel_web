import Badge from "@components/Badge";
import Text from "@components/Text";
import { colors } from "@components/color";
import { AddIcon } from "@components/svg";
import { twMerge } from "tailwind-merge";

interface tableProps {
  data: { index: number; centerName: string; centerType: string; date: string; status: string }[];
  tableClass?: string;
}
export default function Table({ data, tableClass }: tableProps) {
  const columns = ["번호", "기관명", "기관유형", "신청일", "승인상태"];

  return (
    <div className={"w-full"}>
      {/* Column  */}
      <div className="flex rounded-[10px] bg-gray-10 px-4 py-3 text-center">
        <Text className="w-[10%]">번호</Text>
        <Text className="w-[30%]">기관명</Text>
        <Text className="w-[20%]">기관유형</Text>
        <Text className="w-[20%]">신청일</Text>
        <Text className="w-[20%]">승인상태</Text>
      </div>

      {/* Data */}
      {data?.map((item, index) => {
        return (
          <div className="flex border-b border-b-gray-30 px-4 py-3 text-center items-center">
            <Text className="w-[10%]">{item.index}</Text>
            <Text className="w-[30%]">{item.centerName}</Text>
            <Text className="w-[20%]">{item.centerType}</Text>
            <Text className="w-[20%]">{item.date}</Text>
            <div className="w-[20%] items-center flex justify-center">
              <StatusLabel value={item.status} />
            </div>
          </div>
        );
      })}

      {/* no Data */}
      {!data?.length && (
        <div className="py-14 flex flex-col ">
          <button className="flex flex-col gap-y-4 justify-center items-center">
            <div className="rounded-full bg-gray-20 h-10 w-10 justify-center items-center flex">
              <AddIcon width={18} height={18} color={colors.gray[90]} />
            </div>

            <Text className="text-gray-70">내 치료기관 등록하기</Text>
          </button>
        </div>
      )}
    </div>
  );
}

const StatusLabel = ({ value }: { value: string }) => {
  let backgroundColor = "",
    textColor = "";
  if (value == "등록 신청 완료") {
    backgroundColor = "bg-primary-10";
    textColor = "text-primary-90";
  } else if (value == "등록 완료") {
    backgroundColor = "bg-mint-20";
    textColor = "text-mint-90";
  } else if (value == "정보 확인중") {
    backgroundColor = "bg-purple-20";
    textColor = "text-purple-80";
  }

  return <Badge textSize="s" text={value} backgroundColor={backgroundColor} textColor={textColor} />;
};
