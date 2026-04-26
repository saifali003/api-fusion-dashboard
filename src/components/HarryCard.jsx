import { useDispatch } from "react-redux";
import { addToFavorite } from "../feature/favoriteSlice";
export default function HarryCard({ harry }) {
  const dispatch = useDispatch();
  return (
    <div className="w-full bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <img
        src={harry.image || harry.imageUrl}
        alt={harry.title}
        className="h-48 w-full object-fit"
      />

      <div className="p-4">
        <h1 className="font-semibold text-lg mb-2">
          {harry.title}
        </h1>
        <p className="text-sm text-gray-600">
          {harry.description}
        </p>
        <button
          onClick={() => dispatch(addToFavorite(harry))}
          className="mt-3 w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600"
        >
          Add To Favorite
        </button>
      </div>
    </div>
  );
}