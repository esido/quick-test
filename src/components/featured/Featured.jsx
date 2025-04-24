import React from "react";
import "./Featured.css";
import headphones from "../../assets/girl_with_headphone_image.webp";
import earphones from "../../assets/girl_with_earphone_image.webp";
import laptop from "../../assets/boy_with_laptop_image.webp";

const Featured = () => {
  return (
    <div id="featured" className="featured">
      <div className="container">
        <div className="featured__wrapper">
          <h2 className="featured__title">featured products</h2>
          <div className="featured__content">
            <div className="featured__block">
              <img src={headphones} alt="" />
              <div className="featured__info">
                <p>Unparalleled Sound</p>
                <p>Experience crystal-clear audio with premium headphones.</p>
                <button>Buy Now</button>
              </div>
            </div>
            <div className="featured__block">
              <img src={earphones} alt="" />
              <div className="featured__info">
                <p>Stay Connected</p>
                <p>Compact and stylish earphones for every occasion.</p>
                <button>Buy Now</button>
              </div>
            </div>
            <div className="featured__block">
              <img src={laptop} alt="" />
              <div className="featured__info">
                <p>Power in Every Pixel</p>
                <p>Shop the latest laptops for work, gaming, and more.</p>
                <button>Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
