import React, { useState, useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Admin.css"; // Импортируем файл стилей

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const fileInputRef = useRef();

  const token = localStorage.getItem("accessToken");
  console.log("TOKEN:", token);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    // Добавим изображения
    Array.from(images).forEach((image) => {
      formData.append("images", image);
    });

    // Добавим остальные поля
    formData.append("name_uz", productName); // product name
    formData.append("name_en", category); // category
    formData.append("name_ru", price); // price
    formData.append("text_uz", description); // product description
    formData.append("text_en", "");
    formData.append("text_ru", "");

    try {
      const response = await fetch("https://v1.turbotravel.uz/api/news", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      await response.json();
      toast.success("Mahsulot muvaffaqiyatli qo‘shildi!");

      setProductName("");
      setCategory("");
      setPrice("");
      setDescription("");
      setImages([]);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      toast.error("Xatolik yuz berdi");
    }
  };

  return (
    <div className="add-product-container">
      <form
        onSubmit={handleSubmit}
        className="add-product-form"
        encType="multipart/form-data"
      >
        <h1>Mahsulot qo‘shish</h1>

        <div className="form-group">
          <label>Mahsulot nomi:</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Kategoriya:</label>
          <select
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

        <div className="form-group">
          <label>Narxi:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Tavsif:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Rasm:</label>
          <input
            type="file"
            multiple
            onChange={(e) => setImages(e.target.files)}
            ref={fileInputRef}
          />
        </div>

        <button type="submit">Mahsulot qo'shish</button>
      </form>
    </div>
  );
};

export default AddProduct;
