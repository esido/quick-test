import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeCart } from "../../../redux/cartSlice";
import { Link } from "react-router-dom";
import "../Categories.css";

const Phone = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

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

  const isInCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };

  const handleCartToggle = (product) => {
    if (isInCart(product.id)) {
      dispatch(removeCart(product.id));
    } else {
      const formattedProduct = {
        id: product.id,
        title: product.name_uz,
        description: product.text_uz,
        images: product.news_images?.map(
          (img) =>
            `https://v1.turbotravel.uz/api/uploads/images/${img.image_src}`
        ),
        price: product.name_ru,
      };
      dispatch(addProduct(formattedProduct));
    }
  };

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
                  <button
                    className={
                      isInCart(product.id)
                        ? "buy-now-btn buy-now-btn-delete"
                        : "buy-now-btn"
                    }
                    onClick={() => handleCartToggle(product)}
                  >
                    {isInCart(product.id) ? "Olib tashlash" : "Savatga solish"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Phone;
