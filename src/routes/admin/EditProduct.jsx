import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Admin.css";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state } = useLocation();
  const product = state?.product;

  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);

  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    if (product) {
      setProductName(product.name_uz);
      setCategory(product.name_en);
      setPrice(product.name_ru);
      setDescription(product.text_uz);
    }
  }, [product]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    Array.from(images).forEach((image) => {
      formData.append("images", image);
    });

    formData.append("name_uz", productName);
    formData.append("name_en", category);
    formData.append("name_ru", price);
    formData.append("text_uz", description);
    formData.append("text_en", "");
    formData.append("text_ru", "");

    try {
      const response = await fetch(`https://v1.turbotravel.uz/api/news/${id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        toast.success("Mahsulot muvaffaqiyatli yangilandi!");
        navigate("/admin/list");
      } else {
        toast.error("Mahsulotni yangilashda xatolik");
      }
    } catch (error) {
      toast.error("Xatolik yuz berdi");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      encType="multipart/form-data"
      className="edit-form"
    >
      <h2 className="edit-form__title">Mahsulotni tahrirlash</h2>

      <div className="edit-form__group">
        <label className="edit-form__label">Nomi:</label>
        <input
          type="text"
          className="edit-form__input"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
      </div>

      <div className="edit-form__group">
        <label className="edit-form__label">Kategoriya:</label>
        <select
          className="edit-form__input"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Kategoriyani tanlang</option>
          <option value="Smartfonlar">Smartfonlar</option>
          <option value="Noutbuklar">Noutbuklar</option>
          <option value="Mebel">Mebel</option>
          <option value="Motosikllar">Motosikllar</option>
        </select>
      </div>

      <div className="edit-form__group">
        <label className="edit-form__label">Narxi:</label>
        <input
          type="number"
          className="edit-form__input"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>

      <div className="edit-form__group">
        <label className="edit-form__label">Tavsif:</label>
        <textarea
          className="edit-form__input"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <div className="edit-form__group">
        <label className="edit-form__label">Yangi rasm (ixtiyoriy):</label>
        <input
          type="file"
          multiple
          className="edit-form__input"
          onChange={(e) => setImages(e.target.files)}
        />
      </div>

      <button type="submit" className="edit-form__button">
        O‘zgarishlarni saqlash
      </button>
    </form>
  );
};

export default EditProduct;
