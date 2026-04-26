import { useDispatch } from "react-redux";
import { removeFromFavorite } from "../feature/favoriteSlice";
export default function FavoriteCard({ favorite }) {
  const dispatch = useDispatch();
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full hover:shadow-lg transition duration-300">
      <img
        src={favorite.image || favorite.imageUrl}
        alt={favorite.title}
        className="h-40 w-full object-fit"
      />
      <div className="p-4 flex flex-col grow">
        <h1 className="font-semibold text-lg mb-1 line-clamp-1">
          {favorite.title}
        </h1>
        <p className="text-sm text-gray-600 line-clamp-2 mb-1">
          {favorite.description}
        </p>
        <button
          onClick={() => dispatch(removeFromFavorite(favorite.id))}
          className="mt-auto w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
        >
          Remove
        </button>
      </div>
    </div>
  );
}