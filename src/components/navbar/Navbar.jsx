import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import { Search, User, ShoppingCart } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartdata = useSelector((state) => state.cart.cart);
  const totalItems = cartdata.length;

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
              <option value="en">Kategoriya</option>
            </select>

            <div className="search-bar">
              <input
                type="text"
                placeholder="Qididrish..."
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
                <Link to={"/login"}>
                  <User size={20} />
                </Link>
              </li>
              <li className="media-list">
                <Link to={"/cart"}>
                  <ShoppingCart size={20} /> <span>({totalItems})</span>
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
              <NavLink to={"/"}>Asosiy</NavLink>
            </li>

            <li>
              <NavLink to={"/products"}>Hammasi</NavLink>
            </li>
            <li>
              <NavLink to={"/smartphones"}>Smartfonlar</NavLink>
            </li>
            <li>
              <NavLink to={"/laptops"}>Noutbuklar</NavLink>
            </li>
            <li>
              <NavLink to={"/furniture"}>Mebel</NavLink>
            </li>

            <li>
              <NavLink to={"/motorcycle"}>Motosikllar</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
