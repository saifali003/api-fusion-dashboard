import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Users from "./pages/Users";
import Harry from "./pages/harry";
import Favorite from "./pages/Favorite";
import Footer from "./components/Footer";
export default function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 p-4 max-w-7xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/users" element={<Users />} />
          <Route path="/harry" element={<Harry />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}