import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "./singleProducts.css";

const SingleProducts = () => {
  const { id } = useParams();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [singleProduct, setSingleProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setSingleProduct(data);
      });
  }, [id]);

  return (
    <div className="single-product">
      <div className="container">
        {singleProduct && (
          <div className="single-product__wrapper">
            <div className="single-produc__img">
              <Swiper
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
              >
                {singleProduct.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img width={500} src={image} alt={`Image ${index}`} />
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
                className="mySwiper"
              >
                {singleProduct.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img width={100} src={image} alt="" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="single-product__content">
              <h1>{singleProduct.title}</h1>
              <ul>
                <li>
                  <strong>Description:</strong>{" "}
                  <span>{singleProduct.description}</span>
                </li>
                <li>
                  <strong>Brand:</strong> <span>{singleProduct.brand}</span>
                </li>
                <li>
                  <strong>Category:</strong>{" "}
                  <span>{singleProduct.category}</span>
                </li>
                <li>
                  <strong>Rating:</strong> <span>{singleProduct.rating}/5</span>
                </li>
              </ul>
              <div className="single-product__block">
                <div className="single-product__price">
                  <strong>Price:</strong> <span>${singleProduct.price}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleProducts;
