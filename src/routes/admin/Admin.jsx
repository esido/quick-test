import React from "react";
import logo from "../../assets/logo.svg";
import "./Admin.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogOut = window.confirm(
      "Tizimdan aniq chiqishni xohlaysizmi? "
    );
    if (!confirmLogOut) return;
    localStorage.removeItem("accessToken");
    navigate("/");
  };
  return (
    <div className="admin">
      <div className="admin__container">
        <div className="admin__header__wrapper">
          <div className="admin__header__block">
            <a href="#">
              <img src={logo} alt="" />
            </a>
          </div>

          <div className="admin__header__block">
            <button className="admin__header-btn" onClick={handleLogout}>
              Chiqish
            </button>
          </div>
        </div>
      </div>
      <div className="header-line"></div>
      <div className="admin__content__wrapper">
        <Sidebar />
        <div className="admin_content__main">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Admin;
