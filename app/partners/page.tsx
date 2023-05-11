"use client";
import { getCsrfToken } from "next-auth/react";

export default function page() {
  const a = async () => {
    const csrfToken = await getCsrfToken();
    console.log(csrfToken);
  };

  return (
    <div>
      <button onClick={a}>xㅗ큰황닉아하기</button>
    </div>
  );
}
