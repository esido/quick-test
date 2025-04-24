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
            <h3>Navigation</h3>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/products"}>All Products</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>

          <div class="footer__contacts">
            <h3>Get in touch</h3>
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
