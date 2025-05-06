import React from "react";
import "./Subscribe.css";

const Subscribe = () => {
  return (
    <div id="subscribe" className="subscribe">
      <div className="container">
        <div className="subscribe__wrapper">
          <h2 className="subscribe__title">
            Hozir obuna bo‘ling va 20% chegirma oling
          </h2>
          <p className="subscribe__subtitle">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="subscribe__search-bar">
            <input
              type="email"
              placeholder="Emailni kiriting"
              className="subscribe__search-input"
            />
            <button className="subscribe__search-btn">Qidirish</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
