import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css"; // Импортируем файл стилей

function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://v1.turbotravel.uz/api/auth/signin",
        {
          phone_number: phoneNumber,
          password: password,
        }
      );

      if (response.data.success) {
        const { accessToken } = response.data.data.tokens;

        localStorage.setItem("accessToken", accessToken.token);

        toast.success("Siz tizimga muvaffaqiyatli kirdingiz");

        navigate("/admin/add");
      } else {
        toast.error("Noto‘g‘ri kirish ma’lumotlari");
      }
    } catch (error) {
      toast.error("Noto‘g‘ri kirish ma’lumotlari");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Kirish</h1>
        <input
          type="text"
          placeholder="Telefon raqam"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <input
          type="password"
          placeholder="Parol"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Kirish</button>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
}

export default Login;
