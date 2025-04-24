import { useState, useEffect } from "react";
import "../Categories.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  return (
    <div className="category-products">
      <div className="container">
        <h1 className="category-products__title">All Products</h1>
        <div className="category-products__content">
          {products.map((product) => (
            <div className="item" key={product.id}>
              <img src={product.images[0]} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <div className="item-price">
                <strong>${product.price}</strong>
                <button className="buy-now-btn">Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
