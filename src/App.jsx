import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./routes/home/Home";
import Footer from "./components/footer/Footer";
import Products from "./routes/categories/products/Products";
import Phone from "./routes/categories/phones/Phone";
import Laptops from "./routes/categories/laptops/Laptops";
import Furniture from "./routes/categories/furniture/Furniture";
import Motorcycle from "./routes/categories/motorcycle/Motorcycle";
import SingleProducts from "./routes/singleProduct/SingleProducts";
import ScrollToTop from "./ScrollTop";
import Admin from "./routes/admin/Admin";
import AddProduct from "./routes/admin/AddProduct";
import ProductList from "./routes/admin/ProductList";
import Login from "./routes/login/Login";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditProduct from "./routes/admin/EditProduct";

function App() {
  const { pathname } = useLocation();

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Проверяем, есть ли accessToken в localStorage
    const token = localStorage.getItem("accessToken");
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  return (
    <>
      {!pathname.includes("login") && !pathname.includes("admin") && <Navbar />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/smartphones" element={<Phone />} />
        <Route path="/laptops" element={<Laptops />} />
        <Route path="/furniture" element={<Furniture />} />
        <Route path="/motorcycle" element={<Motorcycle />} />
        <Route path="/products/:id" element={<SingleProducts />} />
        <Route path="/login" element={<Login />} />
        {isAuthenticated ? (
          <Route path="/admin" element={<Admin />}>
            <Route path="add" element={<AddProduct />} />
            <Route path="list" element={<ProductList />} />
          </Route>
        ) : (
          <Route path="/admin/*" element={<Navigate to="/login" replace />} />
        )}
        <Route path="/admin/edit-product/:id" element={<EditProduct />} />
      </Routes>
      {!pathname.includes("login") && !pathname.includes("admin") && <Footer />}
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
