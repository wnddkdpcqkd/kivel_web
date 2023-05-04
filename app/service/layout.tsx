import NavHeader from "./components/NavigationHeader";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    // <div className="flex bg-amber-200 h-screen">
    <div className="flex w-full max-w-7xl sm:mx-auto flex-col">
      <NavHeader />

      <main className="flex flex-1">{children}</main>
    </div>
    // </div>
  );
}
