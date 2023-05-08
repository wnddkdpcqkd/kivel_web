import Button from "@components/Button";
import CheckBox from "@components/CheckBox";
import InputLabel from "@components/InputLabel";
import Text from "@components/Text";
import axios from "axios";
import { useState } from "react";

export default function AccountForm() {
  const [id, setId] = useState<string>();
  const [pw, setPw] = useState<string>();
  const [pwCheck, setPwCheck] = useState<string>();
  const [zoneCode, setZoneCode] = useState<string>();
  const [doroAddress, setDoroAddress] = useState<string>();
  const [jibunAddress, setJibunAddress] = useState<string>();
  const [detailAddress, setDetailAddress] = useState<string>();
  const [mail, setMail] = useState<boolean>(true);
  const [sms, setSMS] = useState<boolean>(true);

  const certifyBusinessNumber = async () => {
    const result = await axios.post(
      `http://api.odcloud.kr/api/nts-businessman/v1/validate?serviceKey=${process.env.NEXT_PUBLIC_BUSINNESS_NUMBER_CERTIFY_KEY}`,
      {
        businesses: [
          {
            b_no: "1698802834",
            start_dt: "20220920",
            p_nm: "함경우",
          },
        ],
      }
    );
  };

  const onClickSearchPostCode = () => {
    new window.daum.Postcode({
      oncomplete: function (data: IAddr) {
        setZoneCode(data.zonecode);
        setDoroAddress(data.roadAddress);
        setJibunAddress(data.jibunAddress);
      },
    }).open();
  };
  return (
    <div>
      <SectionHeader title={"개인 정보 입력"} />
      <div className="flex flex-col py-8 gap-y-5 mb-7">
        <InputLabel value={id} label={"아이디"} essential={true} placeholder={"아이디"} setValue={setId} />
        <InputLabel
          value={pw}
          label={"비밀번호"}
          essential={true}
          placeholder={"8자 이상, 영문/숫자/특수문자 사용 가능"}
          setValue={setPw}
        />
        <InputLabel value={pwCheck} label={"비번확인"} essential={true} placeholder={"비밀번호 다시 입력"} setValue={setPwCheck} />
      </div>

      <SectionHeader title={"기관 정보 입력"} />
      <div className="flex flex-col py-8 gap-y-5">
        <InputLabel value={id} label={"기관명"} essential={true} placeholder={"키블아동발달센터"} setValue={setId} />
        <InputLabel value={pwCheck} label={"대표자명"} essential={true} placeholder={"김키블"} setValue={setPwCheck} />
        <div className="flex">
          <InputLabel value={pw} label={"사업자번호"} essential={true} placeholder={"- 없이 작성"} setValue={setPw} />
          <Button buttonClassName="ml-2" label="정보 확인" onClick={certifyBusinessNumber} />
        </div>

        <div className="flex">
          <InputLabel disabled value={zoneCode} label={"주소"} essential={true} placeholder={"우편번호"} setValue={() => {}} />
          <Button buttonClassName="ml-2 bg-white" textClassName="text-primary-90" label="주소 검색" onClick={onClickSearchPostCode} />
        </div>
        <InputLabel
          disabled
          value={doroAddress}
          label={""}
          essential={false}
          placeholder={"기본주소"}
          setValue={() => {}}
          inputClassName="flex-1"
        />
        <InputLabel
          value={detailAddress}
          label={""}
          essential={false}
          placeholder={"상세주소"}
          setValue={setDetailAddress}
          inputClassName="flex-1"
        />
        <InputLabel value={detailAddress} label={"대표자번호"} essential={true} placeholder={"-없이 입력"} setValue={setDetailAddress} />
        <InputLabel value={detailAddress} label={"담당자번호"} essential={true} placeholder={"-없이 입력"} setValue={setDetailAddress} />
        <InputLabel value={detailAddress} label={"email"} essential={false} placeholder={"kivel@naver.com"} setValue={setDetailAddress} />
        <InputLabel
          value={detailAddress}
          label={"홈페이지"}
          essential={false}
          placeholder={"http://kivel.com"}
          setValue={setDetailAddress}
        />
      </div>

      <SectionHeader title={"기타 개인 설정"} require={false} />
      <div className="flex py-8 items-center">
        <Text className="w-32">정보수신동의</Text>
        <div className="mr-5">
          <CheckBox selected={mail} text={"메일"} onClick={() => {}} />
        </div>
        <div>
          {" "}
          <CheckBox selected={sms} text={"SMS"} onClick={() => {}} />
        </div>
      </div>

      <div className="my-6 items-center flex justify-center gap-x-2">
        <Button buttonClassName="bg-gray-20 border-gray-20" textClassName="text-gray-70" label="이전" onClick={() => {}} />
        <Button label="확인" onClick={() => {}} />
      </div>
    </div>
  );
}

const SectionHeader = ({ title, require = true }: { title: string; require?: boolean }) => {
  return (
    <div className="flex py-4 items-center border-b border-gray-30">
      <Text className="text-xl mr-4" weight={600}>
        {title}
      </Text>
      {require && (
        <Text className="text-primary-90 mr-2" weight={700}>
          ·
        </Text>
      )}
      {require && <Text className="text-gray-70">필수입력</Text>}
    </div>
  );
};

declare global {
  interface Window {
    daum: any;
  }
}

interface IAddr {
  roadAddress: string;
  jibunAddress: string;
  zonecode: string;
}
