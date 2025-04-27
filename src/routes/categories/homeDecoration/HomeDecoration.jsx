import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Categories.css";

const HomeDecoration = () => {
  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/home-decoration")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  return (
    <div className="category-products">
      <div className="container">
        <h1 className="category-products__title">Home Decoration</h1>
        <div className="category-products__content">
          {products.map((product) => (
            <div className="item" key={product.id}>
              <Link to={`/products/${product.id}`}>
                <img src={product.images[0]} alt="" />
                <h3>{product.title}</h3>
                <p>{product.description}</p>
              </Link>
              <div className="item-price">
                <strong>${product.price}</strong>
                <button className="buy-now-btn" onClick={openModal}>
                  Buy Now
                </button>
              </div>
            </div>
          ))}
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

export default HomeDecoration;
