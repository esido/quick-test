import React from "react";
import phone from "../../assets/phone.svg";
import laptops from "../../assets/laptop.svg";
import moto from "../../assets/moto.svg";
import furniture from "../../assets/furniture.svg";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./Popular.css";

const Popular = () => {
  return (
    <div id="popular" className="popular">
      <div className="container">
        <div className="popular__wrapper">
          <h2>Mashhur</h2>
          <div className="popular-products">
            <Link to={"/smartphones"}>
              <div className="popular-products__item">
                <img src={phone} alt="" />
                <h3>Smartphonlar</h3>
              </div>
            </Link>
            <Link to={"/laptops"}>
              <div className="popular-products__item">
                <img src={laptops} alt="" />
                <h3>Noutbuklar</h3>
              </div>
            </Link>
            <Link to={"/furniture"}>
              <div className="popular-products__item">
                <img src={furniture} alt="" />
                <h3>Mebel</h3>
              </div>
            </Link>
            <Link to={"/motorcycle"}>
              <div className="popular-products__item">
                <img src={moto} alt="" />
                <h3>Motosikllar</h3>
              </div>
            </Link>
          </div>
          <div className="popular-products__link">
            <h3>Ushbu mashhur mahsulotlarni baholang</h3>
            <Link to={"/products"}>
              Hammasini <span>ko'rish</span> <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
