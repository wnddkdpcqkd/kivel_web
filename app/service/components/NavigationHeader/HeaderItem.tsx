"use client";
import Text from "@components/Text";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function HeaderItem({ title, address }: { title: string; address: string }) {
  const pathName = usePathname();
  const [isCurrentNav, setIsCurrentNav] = useState<boolean>();
  useEffect(() => {
    setIsCurrentNav(pathName == address);
  }, [pathName]);

  return (
    <Link className="py-3 px-4" href={address}>
      <Text weight={isCurrentNav ? 700 : 500}>{title}</Text>
    </Link>
  );
}
