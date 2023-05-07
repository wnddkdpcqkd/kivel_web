import Text from "@components/Text";
import { LogoWithText } from "@components/svg";
import Link from "next/link";

export default function HeaderLogo() {
  return (
    <Link className="flex py-2.5" href={"/service"}>
      <LogoWithText />
      <Text className="text-primary-90 ml-1.5 mr-4">Service</Text>
    </Link>
  );
}
