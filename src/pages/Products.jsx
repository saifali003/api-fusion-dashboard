import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../feature/productsData";
import ProductsCard from "../components/ProductsCard";
export default function Products() {
  const dispatch = useDispatch();
  const { error, loading, products } = useSelector((state) => state.products);
  const query = useSelector((state) => state.search.query);
  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);
  const filterProducts = products.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );
  if (loading) return <h1 className="text-center">Loading...</h1>;
  if (error) return <h1 className="text-center text-red-500">Error</h1>;
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filterProducts.map((item) => (
          <ProductsCard key={item.id} products={item} />
        ))}
      </div>
    </div>
  );
}