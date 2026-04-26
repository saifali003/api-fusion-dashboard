import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHarry } from "../feature/harryData";
import HarryCard from "../components/HarryCard";
export default function Harry() {
  const dispatch = useDispatch();
  const { error, loading, harry } = useSelector((state) => state.harry);
  const query = useSelector((state) => state.search.query);
  useEffect(() => {
    if ((harry || []).length === 0) {
      dispatch(fetchHarry());
    }
  }, [dispatch, harry.length]);
  const filterHarry = (harry || []).filter((item) =>
    (item?.title ?? "")
      .toLowerCase()
      .includes((query ?? "").toLowerCase())
  );
  if (loading) return <h1 className="text-center text-xl">Loading...</h1>;
  if (error) return <h1 className="text-center text-red-500">Error</h1>;
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <h1 className="text-2xl font-bold mb-6">Harry</h1>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filterHarry.map((item, index) => (
          <HarryCard key={item.id || index} harry={item} />
        ))}
      </div>
    </div>
  );
}