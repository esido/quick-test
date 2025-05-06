import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import moto from "../../assets/moto.png";
import mackbook from "../../assets/header_macbook_image.webp";
import iphones from "../../assets/iphones.png";
import { ArrowRight } from "lucide-react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="hero" role="banner">
      <div className="container">
        <div className="hero__wrapper">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            navigation={false}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="hero__block">
                <div className="hero__content">
                  <p className="hero__info">
                    Shoshiling, faqat bir necha dona qoldi!{" "}
                  </p>
                  <h1 className="hero__title">
                    Tezlikni bo‘shating. Yo‘lni hukmron qiling.
                  </h1>
                  <div className="hero__btns">
                    <Link to={"/motorcycle"} className="hero__link">
                      Hozir sotib oling
                    </Link>
                    <Link to={"/motorcycle"} className="hero__link2">
                      Boshqalari <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>
                <img
                  className="hero__banner"
                  style={{ width: "288px", height: "288px" }}
                  src={moto}
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="hero__block">
                <div className="hero__content">
                  <p className="hero__info">
                    Shoshiling, faqat bir necha dona qoldi!
                  </p>
                  <h1 className="hero__title">
                    Quvvat va Nafislik Uchrashadi - Apple MacBook Pro siz uchun!
                  </h1>

                  <div className="hero__btns">
                    <Link to={"/laptops"} className="hero__link">
                      Hozir sotib oling
                    </Link>
                    <Link to={"/laptops"} className="hero__link2">
                      Boshqalari <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>

                <img
                  className="hero__banner"
                  style={{ width: "288px", height: "222px" }}
                  src={mackbook}
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="hero__block">
                <div className="hero__content">
                  <p className="hero__info">
                    {" "}
                    Shoshiling, faqat bir necha dona qoldi!
                  </p>
                  <h1 className="hero__title">
                    Rang bilan o‘zingizni ifoda eting
                  </h1>

                  <div className="hero__btns">
                    <Link to={"/smartphones"} className="hero__link">
                      Hozir sotib oling
                    </Link>
                    <Link to={"/smartphones"} className="hero__link2">
                      Boshqalari <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>
                <img
                  className="hero__banner"
                  style={{ width: "288px", height: "200px" }}
                  src={iphones}
                  alt=""
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Hero;
