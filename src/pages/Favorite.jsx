import { useSelector } from "react-redux";
import FavoriteCard from "../components/FavoriteCard";
export default function Favorite() {
    const favorites = useSelector((state) => state.favorite.favorites);
    const query = useSelector((state) => state.search.query);
    const filterFavorite = favorites.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
    );
    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">Favorite</h1>
            {
                filterFavorite.length === 0 ?
                    (<p>No Favorite Yet</p>) :
                    (
                        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {filterFavorite.map((item) => (
                                <FavoriteCard key={item.id} favorite={item} />
                            ))}
                        </div>
                    )}
        </div>
    );
}