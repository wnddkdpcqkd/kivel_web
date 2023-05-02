import NavHeader from "./components/NavigationHeader";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center">
      <div className="lg:w-[80rem] sm:w-full">
        <NavHeader />
        <main>{children}</main>
      </div>
    </div>
  );
}
