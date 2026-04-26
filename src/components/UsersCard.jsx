import {useDispatch} from "react-redux";
import { addToFavorite } from "../feature/favoriteSlice";
export default function UsersCard({users}){
    const dispatch = useDispatch();
    return (
    <div className="bg-white rounded-xl shadow-md p-4 text-center hover:shadow-lg transition">
      <img
        src={users.image}
        alt={users.title}
        className="h-20 w-20 mx-auto rounded-full object-fit"
      />
      <h1 className="mt-3 font-semibold">{users.title}</h1>
      <p className="text-sm text-gray-600">{users.description}</p>
      <button
        onClick={() => dispatch(addToFavorite(users))}
        className="mt-3 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
      >
        Add To Favorite
      </button>
    </div>
  );
}