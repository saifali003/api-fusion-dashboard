import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../feature/productsData";
import { fetchUsers } from "../feature/usersData";
import { fetchHarry } from "../feature/harryData";
import ProductsCard from "../components/ProductsCard";
import UsersCard from "../components/UsersCard";
import HarryCard from "../components/HarryCard";
export default function Home() {
  const dispatch = useDispatch();
  const { error: perror, loading: ploading, products } = useSelector((state) => state.products);
  const { error: uerror, loading: uloading, users } = useSelector((state) => state.users);
  const { error: herror, loading: hloading, harry } = useSelector((state) => state.harry);
  const query = useSelector((state) => state.search.query);
  const filterProducts = products.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );
  const filterUsers = users.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );
  const filterHarry = harry.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchUsers());
    dispatch(fetchHarry());
  }, [dispatch]);
  if (ploading || uloading || hloading)
    return <h1 className="text-center text-xl">Loading...</h1>;
  if (perror || uerror || herror)
    return <h1 className="text-center text-red-500">Something Went Wrong</h1>;
  return (
    <div className="space-y-10">
      <Section title="Products">
        {filterProducts.map((item) => (
          <ProductsCard key={item.id} products={item} />
        ))}
      </Section>
      <Section title="Users">
        {filterUsers.map((item) => (
          <UsersCard key={item.id} users={item} />
        ))}
      </Section>
      <Section title="Harry Potter">
        {filterHarry.map((item) => (
          <HarryCard key={item.id} harry={item} />
        ))}
      </Section>
    </div>
  );
}
function Section({ title, children }) {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {children}
      </div>
    </div>
  );
}