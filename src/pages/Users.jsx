import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../feature/usersData";
import UsersCard from "../components/UsersCard";
export default function Users() {
  const dispatch = useDispatch();
  const { error, loading, users } = useSelector((state) => state.users);
  const query = useSelector((state) => state.search.query);
  useEffect(() => {
    if (users.length === 0) {
      dispatch(fetchUsers());
    }
  }, [dispatch, users.length]);
  const filterUsers = users.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );
  if (loading) return <h1 className="text-center">Loading...</h1>;
  if (error) return <h1 className="text-center text-red-500">Error</h1>;
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Users</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filterUsers.map((item) => (
          <UsersCard key={item.id} users={item} />
        ))}
      </div>
    </div>
  );
}