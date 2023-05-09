import Script from "next/script";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full">
      <script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
      <main className="flex flex-1">{children}</main>
    </div>
  );
}
