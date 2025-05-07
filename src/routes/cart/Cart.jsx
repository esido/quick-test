import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeCart, clearCart } from "../../redux/cartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const dispatch = useDispatch();
  const cartdata = useSelector((state) => state.cart.cart);

  const removeFromCart = (id) => {
    dispatch(removeCart(id));
  };

  const handleBuy = () => {
    if (cartdata.length === 0) return;
    toast.success("Haridingiz uchun raxmat");
    dispatch(clearCart());
  };

  const totalItems = cartdata.length;
  const totalPrice = cartdata.reduce((sum, item) => {
    const price = parseFloat(item.price?.replace(/\D/g, "")) || 0;
    return sum + price;
  }, 0);

  return (
    <div className="category-products">
      <div className="container">
        <h1 className="category-products__title">Savat</h1>
        {cartdata.length === 0 ? (
          <div className="category-products__none">
            <p>🛒 Sizning savatingiz bo'sh</p>
          </div>
        ) : (
          <>
            <div className="category-products__content">
              {cartdata.map((product) => (
                <div className="item" key={product.id}>
                  <Link to={`/products/${product.id}`}>
                    {product.images && product.images.length > 0 && (
                      <img src={product.images[0]} alt="" />
                    )}
                    <h3>{product.title || product.name_uz}</h3>
                    <p>{product.description || product.text_uz}</p>
                  </Link>
                  <div className="item-price">
                    <strong>{product.price} so'm</strong>
                    <button
                      className="item-price-delete"
                      onClick={() => removeFromCart(product.id)}
                    >
                      O'chirish
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <div className="cart-summary-price">
                <p>
                  📦 Mahsulotar: <strong>{totalItems}</strong>
                </p>
                <p>
                  💰 Umumiy summa:{" "}
                  <strong>{totalPrice.toLocaleString()} so'm</strong>
                </p>
              </div>
              <div>
                <button className="buy-now-btn" onClick={handleBuy}>
                  Sotib olish
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
