import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../feature/searchSlice";
import { Link } from "react-router-dom";
export default function Navbar() {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.search.query);
  const favorites = useSelector((state) => state.favorite.favorites);
  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto p-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-blue-600">
          Api Fusion Dashboard
        </h1>
        <input
          className="w-120 px-5 py-2 rounded bg-gray-400 text-white outline-none"
          placeholder="Search..."
          type="text"
          value={query}
          onChange={(e) => dispatch(setSearch(e.target.value))}
        />
        <div className="flex gap-4">
          <Link to="/" className="text-xl font-bold hover:underline">Home</Link>
          <Link to="/products" className="text-xl font-bold hover:underline" >Products</Link>
          <Link to="/users" className="text-xl font-bold hover:underline">Users</Link>
          <Link to="/harry" className="text-xl font-bold hover:underline">Harry</Link>
          <Link to="/favorite" className="text-red-500 text-xl font-bold hover:underline">
            Favorite ({favorites.length})
          </Link>
        </div>
      </div>
    </div>
  );
}