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
                  <p className="hero__info">Hurry up only few lefts!</p>
                  <h1 className="hero__title">
                    Unleash the Speed. Rule the Road.
                  </h1>
                  <div className="hero__btns">
                    <Link to={"/motorcycle"} className="hero__link">
                      Shop now
                    </Link>
                    <Link to={"/motorcycle"} className="hero__link2">
                      Find more <ArrowRight size={20} />
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
                  <p className="hero__info">Hurry up only few lefts!</p>
                  <h1 className="hero__title">
                    Power Meets Elegance - Apple MacBook Pro is Here for you!
                  </h1>

                  <div className="hero__btns">
                    <Link to={"/laptops"} className="hero__link">
                      Shop now
                    </Link>
                    <Link to={"/laptops"} className="hero__link2">
                      Find more <ArrowRight size={20} />
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
                  <p className="hero__info">Hurry up only few lefts!</p>
                  <h1 className="hero__title">Express Yourself with Color</h1>

                  <div className="hero__btns">
                    <Link to={"/smartphones"} className="hero__link">
                      Shop now
                    </Link>
                    <Link to={"/smartphones"} className="hero__link2">
                      Find more <ArrowRight size={20} />
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
