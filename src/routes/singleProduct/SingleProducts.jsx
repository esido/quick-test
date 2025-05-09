import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeCart } from "../../redux/cartSlice";
import "./singleProducts.css";

const SingleProducts = () => {
  const { id } = useParams();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [singleProduct, setSingleProduct] = useState(null);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  useEffect(() => {
    fetch(`https://v1.turbotravel.uz/api/news/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setSingleProduct(data.data);
      })
      .catch((err) => console.error("Ошибка загрузки продукта:", err));
  }, [id]);

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
    <div className="single-product">
      <div className="container">
        {singleProduct && (
          <div className="single-product__wrapper">
            <div className="single-product__img">
              <Swiper
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="single-mySwiper2"
              >
                {singleProduct.news_images?.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={`https://v1.turbotravel.uz/api/uploads/images/${image.image_src}`}
                      alt={`Image ${index}`}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="single-mySwiper"
              >
                {singleProduct.news_images?.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      width={100}
                      src={`https://v1.turbotravel.uz/api/uploads/images/${image.image_src}`}
                      alt=""
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="single-product__content">
              <h1>{singleProduct.name_uz}</h1>
              <ul>
                <li>
                  <strong>Tavsif:</strong> <span>{singleProduct.text_uz}</span>
                </li>
                <li>
                  <strong>Categoriya:</strong>{" "}
                  <span>{singleProduct.name_en}</span>
                </li>
              </ul>

              <div className="single-product__block">
                <div className="single-product__price">
                  <strong>Narx:</strong> <span>{singleProduct.name_ru}</span>
                </div>
              </div>
              <div className="buy-now-item">
                {" "}
                <button
                  className={
                    isInCart(singleProduct.id)
                      ? "buy-now-btn buy-now-btn-delete"
                      : "buy-now-btn"
                  }
                  onClick={() => handleCartToggle(singleProduct)}
                >
                  {isInCart(singleProduct.id)
                    ? "Olib tashlash"
                    : "Savatga solish"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleProducts;
