import { addToFavorite } from "../feature/favoriteSlice"
import { useDispatch } from "react-redux"
export default function ProductsCard({products}){
    const dispatch = useDispatch();
    return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <img
        src={products.image}
        alt={products.title}
        className="h-40 w-full object-fit"
      />
      <div className="p-4">
        <h1 className="font-semibold text-lg">{products.title}</h1>
        <p className="text-sm text-gray-600 line-clamp-2">
          {products.description}
        </p>
        <button
          onClick={() => dispatch(addToFavorite(products))}
          className="mt-3 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Add To Favorite
        </button>
      </div>
    </div>
  );
}