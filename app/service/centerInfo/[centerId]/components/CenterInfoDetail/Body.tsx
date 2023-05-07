import BadgeTag from "@components/BadgeTag";
import Text from "@components/Text";
import Link from "next/link";

interface bodyProps {
  doroAddress: string;
  jibunAddress: string;
  vouchers: string[];
  centerIntro: string;
  treatmentArea: string[];
  keyword: string[];
  businessHour: {
    mon: string;
    tue: string;
    wed: string;
    thu: string;
    fri: string;
    sat: string;
    sun: string;
  };
  phone: string;
  homepage: string;
}

export default function Body({
  businessHour,
  centerIntro,
  doroAddress,
  jibunAddress,
  keyword,
  treatmentArea,
  vouchers,
  homepage,
  phone,
}: bodyProps) {
  return (
    <div>
      {/* 주소 */}
      <div className="flex border-b border-b-gray-30 pb-5 mb-5">
        <Text className="w-16 mr-8">주소</Text>

        <div>
          <div className="flex items-center">
            <Text size="s" className="text-gray-70 w-14">
              도로명
            </Text>
            <Text weight={400}>{doroAddress}</Text>
          </div>

          <div className="flex items-center mt-1">
            <Text size="s" className="text-gray-70 w-14">
              지번
            </Text>
            <Text weight={400}>{jibunAddress}</Text>
          </div>
        </div>
      </div>

      {/* 보험 및 바우처 */}
      <div className="flex border-b border-b-gray-30 pb-5 mb-5">
        <Text className="w-16 mr-8">{`보험 및\n바우처`}</Text>
        <div className="flex gap-x-8 items-start">
          {vouchers.map((item, index) => (
            <div key={`voucher_${index}`} className="flex items-center">
              <div className="h-4 w-1 rounded-[50px] mr-2 bg-primary-90" />
              <Text weight={400}>{item}</Text>
            </div>
          ))}
        </div>
      </div>

      {/* 기관소개 */}
      <div className="flex border-b border-b-gray-30 pb-5 mb-5">
        <Text className="w-16 mr-8">{`기관 소개`}</Text>
        <Text className="flex-1" weight={400}>
          {centerIntro}
        </Text>
      </div>

      {/* 치료영역 */}
      <div className="flex border-b border-b-gray-30 pb-5 mb-5">
        <Text className="w-16 mr-8">{`치료 영역`}</Text>
        <div className="flex gap-x-1 items-start">
          {treatmentArea.map((item, index) => (
            <BadgeTag key={`treatmentArea_${index}`} text={item} />
          ))}
        </div>
      </div>

      {/* 키워드 */}
      <div className="flex border-b border-b-gray-30 pb-5 mb-5">
        <Text className="w-16 mr-8">{`키워드`}</Text>

        <div className="flex flex-1 gap-1 items-start flex-wrap">
          {keyword.map((item, index) => (
            <BadgeTag key={`treatmentArea_${index}`} text={`# ${item}`} />
          ))}
        </div>
      </div>

      {/* 진료 시간 */}
      <div className="flex border-b border-b-gray-30 pb-5 mb-5">
        <Text className="w-16 mr-8">{`진료 시간`}</Text>

        <div>
          <div className="flex items-center">
            <Text size="s" className="text-gray-70 w-14">
              평일
            </Text>
            <Text weight={400}>.......</Text>
          </div>

          <div className="flex items-center mt-1">
            <Text size="s" className="text-gray-70 w-14">
              주말
            </Text>
            <Text weight={400}>........</Text>
          </div>
        </div>
      </div>

      {/* 문의 */}
      <div className="flex border-b border-b-gray-30 pb-5 mb-5">
        <Text className="w-16 mr-8">{`문의`}</Text>

        <div>
          <div className="flex items-center">
            <Text size="s" className="text-gray-70 w-16">
              전화
            </Text>
            <Text weight={400}>{phone}</Text>
          </div>

          <div className="flex items-center mt-1">
            <Text size="s" className="text-gray-70 w-16">
              홈페이지
            </Text>
            <Link href={homepage} target="_blank">
              <Text weight={400}>{homepage}</Text>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
