"use client";
import AccountForm from "./components/AccountForm";
import Agreements from "./components/Agreements";
import Indicator from "./components/Indicator";
import { useEffect, useState } from "react";
import SignUpComplete from "./components/SignUpComplete";

export default function page() {
  const [progress, setProgress] = useState<number>(0);
  return (
    <div className="flex flex-1 flex-col">
      <div className="mb-10">
        <Indicator index={progress} />
      </div>

      {/* <Agreements /> */}
      <AccountForm />
      {/* <SignUpComplete /> */}
    </div>
  );
}
