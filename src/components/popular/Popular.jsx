import React from "react";
import phone from "../../assets/phone.svg";
import laptops from "../../assets/laptop.svg";
import grocery from "../../assets/grocery.svg";
import homeDecoration from "../../assets/home-decoration.svg";
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
          <h2>Popular</h2>
          <div className="popular-products">
            <Link to={"/smartphones"}>
              <div className="popular-products__item">
                <img src={phone} alt="" />
                <h3>Phone</h3>
              </div>
            </Link>
            <Link to={"/laptops"}>
              <div className="popular-products__item">
                <img src={laptops} alt="" />
                <h3>Laptop</h3>
              </div>
            </Link>
            <Link to={"/groceries"}>
              <div className="popular-products__item">
                <img src={grocery} alt="" />
                <h3>Grocery</h3>
              </div>
            </Link>
            <Link to={"/skincare"}>
              <div className="popular-products__item">
                <img src={homeDecoration} alt="" />
                <h3>Home Decoration</h3>
              </div>
            </Link>
            <Link to={"/furniture"}>
              <div className="popular-products__item">
                <img src={furniture} alt="" />
                <h3>Furniture</h3>
              </div>
            </Link>
            <Link to={"/motorcycle"}>
              <div className="popular-products__item">
                <img src={moto} alt="" />
                <h3>motocirle</h3>
              </div>
            </Link>
          </div>
          <div className="popular-products__link">
            <h3>Score these popularing kicks</h3>
            <Link to={"/products"}>
              See <span>all</span> <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
