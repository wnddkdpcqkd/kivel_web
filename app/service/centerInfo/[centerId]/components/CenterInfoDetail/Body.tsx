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
}

export default function Body({}) {
  return <div></div>;
}
