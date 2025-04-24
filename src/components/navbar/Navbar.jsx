import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import { Search, User, Heart, ShoppingCart } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <section id="header" className="header" navigation="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__block1">
            <a href="#">
              <img src={logo} alt="" />
            </a>
          </div>

          <div className="header__block2">
            <select className="category-select">
              <option value="en">Category</option>
            </select>

            <div className="search-bar">
              <input
                type="text"
                placeholder="Search for anything"
                className="search-input"
              />
              <button className="search-btn">
                <Search size={20} />
              </button>
            </div>
          </div>

          <div className="header__block3">
            <ul className="header__list">
              <li>
                <Link to={"/"}>
                  <User size={20} />
                  <span>Account</span>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <Heart size={20} />
                  <span>Favorites</span>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <ShoppingCart size={20} />
                  <span>Cart</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="header-line"></div>
      <div className="container">
        <nav className="nav">
          <ul>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>

            <li>
              <NavLink to={"/products"}>All</NavLink>
            </li>
            <li>
              <NavLink to={"/smartphones"}>smartphones</NavLink>
            </li>
            <li>
              <NavLink to={"/laptops"}>laptops</NavLink>
            </li>
            <li>
              <NavLink to={"/home-decoration"}>home decoration</NavLink>
            </li>
            <li>
              <NavLink to={"/groceries"}>groceries</NavLink>
            </li>

            <li>
              <NavLink to={"/furniture"}>furniture</NavLink>
            </li>

            <li>
              <NavLink to={"/motorcycle"}>motorcycle</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
