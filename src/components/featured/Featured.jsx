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
          <h2 className="featured__title">Tanlangan mahsulotlar</h2>
          <div className="featured__content">
            <div className="featured__block">
              <img src={headphones} alt="" />
              <div className="featured__info">
                <p>Tengsiz ovoz</p>
                <p>
                  Premium naushniklar bilan tiniq va aniq audio tajribasini
                  o‘zingizda his eting
                </p>
                <button>Hozir sotib oling</button>
              </div>
            </div>
            <div className="featured__block">
              <img src={earphones} alt="" />
              <div className="featured__info">
                <p>Bog‘lanishda bo‘ling</p>
                <p>Har bir holat uchun ixcham va zamonaviy naushniklar.</p>
                <button>Hozir sotib oling</button>
              </div>
            </div>
            <div className="featured__block">
              <img src={laptop} alt="" />
              <div className="featured__info">
                <p>Har bir pikseldagi quvvat </p>
                <p>
                  Ish, o‘yin va boshqa maqsadlar uchun yangi noutbuklarni sotib
                  oling.
                </p>
                <button>Hozir sotib oling</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
