"use client";
import AccountForm from "./components/AccountForm";
import Agreements from "./components/Agreements";
import Indicator from "./components/Indicator";
import { useEffect, useState } from "react";

export default function page() {
  const [progress, setProgress] = useState<number>(0);
  return (
    <div className="w-full ">
      <div className="mb-10">
        <Indicator index={progress} />
      </div>

      <AccountForm />
      {/* <Agreements /> */}
    </div>
  );
}
