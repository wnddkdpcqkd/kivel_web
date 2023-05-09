import Button from "@components/Button";
import Text from "@components/Text";
import { colors } from "@components/color";
import { CheckLine } from "@components/svg";

export default function SignUpComplete() {
  return (
    <div className="flex flex-1 flex-col pt-44 items-center">
      <CheckLine width={50} height={50} color={colors.primary[90]} />
      <Text size="xl" weight={600} className="mt-10">
        기관 회원가입이 완료되었어요.
      </Text>
      <Text size="l" className="mt-5">
        로그인 후 내 치료기관을 등록할 수 있어요!
      </Text>

      <Button label="로그인 페이지로 이동" buttonClassName="mt-10" onClick={() => {}} />
    </div>
  );
}
