import React from "react";
import logo from "../../assets/logo.svg";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer" className="footer" navigation="footer">
      <div className="container">
        <div className="footer_wrapper">
          <div class="footer__logo">
            <a href="#">
              <img src={logo} alt="" />
            </a>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
              earum molestias, placeat delectus voluptatum asperiores, ullam
            </p>
          </div>

          <div class="footer__links">
            <h3>Navigatsiya</h3>
            <ul>
              <li>
                <Link to={"/"}>Asosiy</Link>
              </li>
              <li>
                <Link to={"/products"}>Hammasi</Link>
              </li>
              <li>
                <Link to={"/about"}>Biz haqimizda</Link>
              </li>
              <li>
                <Link to={"/contact"}>Bog'lanish</Link>
              </li>
            </ul>
          </div>

          <div class="footer__contacts">
            <h3>Bog'lanish</h3>
            <p>
              <a>+998 78 123-45-67</a>
            </p>
            <p>email: email@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
