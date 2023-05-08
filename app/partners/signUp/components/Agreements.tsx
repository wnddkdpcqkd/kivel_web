import Button from "@components/Button";
import CheckBox from "@components/CheckBox";
import Text from "@components/Text";
import { useState } from "react";

export default function Agreements() {
  const [signUpTos, setSignUpTos] = useState<boolean>(false);
  const [personalInfoTos, setPersonalInfoTos] = useState<boolean>(false);
  return (
    <div>
      <div>
        <Text className="text-xl mb-4">1. 키블 회원가입약관</Text>
        <div className="w-full h-52 border border-gray-30 rounded-xl p-4 overflow-y-scroll">
          <Text weight={400} className="text-gray-70">
            {dummy}
          </Text>
        </div>
        <div className="py-1 mb-10">
          <CheckBox selected={signUpTos} text={`(필수) 회원가입 약관 내용에 동의합니다.`} onClick={() => setSignUpTos((v) => !v)} />
        </div>
      </div>

      <div>
        <Text className="text-xl mb-4">2. 개인정보 수집 및 이용</Text>
        <div className="w-full h-52 border border-gray-30 rounded-xl p-4 overflow-y-scroll">
          <Text weight={400} className="text-gray-70">
            {dummy}
          </Text>
        </div>
        <div className="py-1 mb-10">
          <CheckBox
            selected={personalInfoTos}
            text={`(필수) 개인정보 수집 및 이용 내용에 동의합니다.`}
            onClick={() => setPersonalInfoTos((v) => !v)}
          />
        </div>
      </div>

      <div className="flex justify-center gap-x-2 mb-10">
        <Button label={"동의하기"} onClick={() => {}} />
      </div>
    </div>
  );
}

const dummy = `1. 아이톡톡 관련 제반 서비스의 이용과 관련하여 필요한 사항을 규정합니다
2. 회사는 정보통신망 이용촉진 및 정보보호 등에 관한 법률, 개인정보 보호법, 통신비밀보호법, 전기통신사업법 등 정보통신서비스제공자가 준수하여야 할 관련 법규상의 개인정보보호 규정을 준수하며, 관련 법령에 의거한 개인정보취급/처리방침을 정하여 이용자의 권익 보호에 최선을 다하고 있습니다.

제 1 조 (목적)
본 약관은 아이톡톡(이하 "회사")가 운영하는 웹사이트(이하 "사이트")와 어플리케이션(이하 "앱")에서 제공하는 인터넷 관련 서비스를 이용함에 있어, 사이트 및 앱과 회원 간의 이용 조건 및 제반 절차, 기타 필요한 사항을 규정함을 목적으로 한다.
제 2 조 (용어의 정의)
이 약관에서 사용하는 용어의 정의는 아래와 같다.
1. 아이톡톡 관련 제반 서비스의 이용과 관련하여 필요한 사항을 규정합니다
2. 회사는 정보통신망 이용촉진 및 정보보호 등에 관한 법률, 개인정보 보호법, 통신비밀보호법, 전기통신사업법 등 정보통신서비스제공자가 준수하여야 할 관련 법규상의 개인정보보호 규정을 준수하며, 관련 법령에 의거한 개인정보취급/처리방침을 정하여 이용자의 권익 보호에 최선을 다하고 있습니다.

제 1 조 (목적)
본 약관은 아이톡톡(이하 "회사")가 운영하는 웹사이트(이하 "사이트")와 어플리케이션(이하 "앱")에서 제공하는 인터넷 관련 서비스를 이용함에 있어, 사이트 및 앱과 회원 간의 이용 조건 및 제반 절차, 기타 필요한 사항을 규정함을 목적으로 한다.
제 2 조 (용어의 정의)
이 약관에서 사용하는 용어의 정의는 아래와 같다.`;
