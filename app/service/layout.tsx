import NavHeader from "./components/NavigationHeader";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-7xl sm:mx-auto">
        <NavHeader />
        <main>{children}</main>
      </div>
    </div>
  );
}
