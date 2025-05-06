import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Categories.css";

const Phone = () => {
  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    fetch("https://v1.turbotravel.uz/api/news")
      .then((response) => response.json())
      .then((data) => {
        const filteredProducts = data.data.filter(
          (product) => product.name_en === "Smartfonlar"
        );
        setProducts(filteredProducts);
      });
  }, []);

  return (
    <div className="category-products">
      <div className="container">
        <h1 className="category-products__title">Smartfonlar</h1>
        <div className="category-products__content">
          {products.map((product) => {
            const imageSrc = product.news_images?.[0]?.image_src
              ? `https://v1.turbotravel.uz/api/uploads/images/${product.news_images[0].image_src}`
              : "https://via.placeholder.com/100";
            return (
              <div className="item" key={product.id}>
                <Link to={`/products/${product.id}`}>
                  <img src={imageSrc} alt="" />
                  <h3>{product.name_uz}</h3>
                  <p>{product.text_uz}</p>
                </Link>
                <div className="item-price">
                  <strong>{product.name_ru} so'm</strong>
                  <button className="buy-now-btn" onClick={openModal}>
                    Sotib olish
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        {isOpen && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <span className="close-btn" onClick={closeModal}>
                &times;
              </span>
              <h2>Call us to place an order</h2>
              <p className="phone-number">+998 90-123-45-67</p>
              <a href="tel:+998901234567" className="call-btn">
                Call
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Phone;
