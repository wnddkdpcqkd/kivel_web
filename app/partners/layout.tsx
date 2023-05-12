import NavigationHeader from "@components/NavHeader";
import { LogoWithText, PersonLine } from "@components/svg";
import Text from "@components/Text";
import Link from "next/link";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full max-w-7xl sm:mx-auto flex-col">
      <NavigationHeader
        Logo={<Logo />}
        loginButtonUrl="/partners/login"
        leftItems={[
          { title: "병원/센터 등록", address: "/partners/whereToGo" },
          { title: "문의", address: "/partners/customService" },
        ]}
      />
      <main className="flex flex-1">{children}</main>
    </div>
  );
}

const Logo = () => {
  return (
    <Link className="flex py-2.5" href={"/partners"}>
      <LogoWithText />
      <Text className="text-primary-90 ml-1.5 mr-4">for Partners</Text>
    </Link>
  );
};
