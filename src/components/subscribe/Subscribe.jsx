import React from "react";
import "./Subscribe.css";

const Subscribe = () => {
  return (
    <div id="subscribe" className="subscribe">
      <div className="container">
        <div className="subscribe__wrapper">
          <h2 className="subscribe__title">Subscribe now & get 20% off</h2>
          <p className="subscribe__subtitle">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="subscribe__search-bar">
            <input
              type="email"
              placeholder="Enter your email"
              className="subscribe__search-input"
            />
            <button className="subscribe__search-btn">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
