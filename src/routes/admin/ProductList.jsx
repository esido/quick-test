import React, { useEffect, useState } from "react";
import "./Admin.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("accessToken");
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://v1.turbotravel.uz/api/news");
      const data = await response.json();
      setProducts(data.data);
    } catch (error) {
      toast.error("Mahsulotlarni olishda xatolik :");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Ushbu mahsulotni aniq o‘chirishni xohlaysizmi? "
    );
    if (!confirmDelete) return;

    try {
      const response = await fetch(`https://v1.turbotravel.uz/api/news/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        setProducts((prev) => prev.filter((item) => item.id !== id));
        alert("Mahsulot o‘chirildi!");
      } else {
        toast.success("O‘chirishda xatolik");
      }
    } catch (error) {
      toast.error("O‘chirishda xatolik");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <p className="loading">Yuklash...</p>;

  return (
    <div className="product-list-container">
      <h2>Mahsulotlar ro‘yxati</h2>
      <div>
        {products.map((product) => {
          const imageSrc = product.news_images?.[0]?.image_src
            ? `https://v1.turbotravel.uz/api/uploads/images/${product.news_images[0].image_src}`
            : "https://via.placeholder.com/100";
          return (
            <div className="product-item" key={product.id}>
              <img src={imageSrc} alt={product.name_uz} />
              <div className="product-info">
                <h3>{product.name_uz}</h3>
                <p>Kategoriya: {product.name_en}</p>
                <p>Narxi: {product.name_ru} сум</p>
                <p>{product.text_uz}</p>
              </div>
              <button onClick={() => handleDelete(product.id)}>
                O'chirish
              </button>
              <button
                className="edit-btn"
                onClick={() =>
                  navigate(`/admin/edit-product/${product.id}`, {
                    state: { product },
                  })
                }
                style={{ marginLeft: "10px" }}
              >
                O'zgartirish
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
