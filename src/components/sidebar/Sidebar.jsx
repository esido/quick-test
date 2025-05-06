import React from "react";
import { Link, useLocation } from "react-router-dom";
import add from "../../assets/add_icon.svg";
import list from "../../assets/product_list_icon.svg";
import "./Sidebar.css";

const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <div className="sidebar">
      <ul className="sidebar__list">
        <li>
          <Link
            className={
              pathname === "/admin/add"
                ? "sidebar-link sidebar-active"
                : "sidebar-link"
            }
            to={"/admin/add"}
            loading="lazy"
          >
            <img src={add} alt="add" />
          </Link>
        </li>
        <li>
          <Link
            className={
              pathname === "/admin/list"
                ? "sidebar-link sidebar-active"
                : "sidebar-link"
            }
            to={"/admin/list"}
            loading="lazy"
          >
            <img src={list} alt="list" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
