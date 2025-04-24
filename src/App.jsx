import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./routes/home/Home";
import Footer from "./components/footer/Footer";
import Products from "./routes/categories/products/Products";
import Phone from "./routes/categories/phones/Phone";
import Laptops from "./routes/categories/laptops/Laptops";
import HomeDecoration from "./routes/categories/homeDecoration/HomeDecoration";
import Groceries from "./routes/categories/groceries/Groceries";
import Furniture from "./routes/categories/furniture/Furniture";
import Motorcycle from "./routes/categories/motorcycle/Motorcycle";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/smartphones" element={<Phone />} />
        <Route path="/laptops" element={<Laptops />} />
        <Route path="/home-decoration" element={<HomeDecoration />} />
        <Route path="/groceries" element={<Groceries />} />
        <Route path="/furniture" element={<Furniture />} />
        <Route path="/motorcycle" element={<Motorcycle />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
