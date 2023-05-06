import CenterInfoDetail from "./components/CenterInfoDetail";
import SubMap from "./components/SubMap";

export default async function page({ params: { centerId } }: { params: { centerId: number } }) {
  const data = fetchData(centerId);
  return (
    <div className="flex flex-col flex-1">
      <div className="w-full border-gray-30 border">
        <SubMap />
      </div>
      <div className="flex my-8 justify-between">
        <CenterInfoDetail />
      </div>
    </div>
  );
}

const fetchData = async (centerId: number) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${centerId}`, { cache: "no-cache" });
  const data = await res.json();
  return data;
};
