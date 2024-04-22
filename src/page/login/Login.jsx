import React, { useState } from "react";
import "../login/login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login({ onLogin }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8081/login", formData);
      if (response.data.message === 'Đăng nhập thành công') {
        onLogin(); // Gọi hàm onLogin từ props khi đăng nhập thành công
        navigate('/');
      } else {
        setError("Thông tin đăng nhập không đúng");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError("Email hoặc mật khẩu không chính xác");
      } else {
        setError("Lỗi kết nối đến server");
      }
    }
  }

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="title">
            <span>Login</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <i className="fas fa-user"></i>
              <input
                type="text"
                name="email"
                placeholder="Email or Phone"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="row">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <div className="pass">
              <label>
                <input type="checkbox" />
                <a>Remember Me</a>
              </label>
              <span>
                <a href="#">Forgot password?</a>
              </span>
            </div>
            <div className="row button">
              <input type="submit" value="Login" />
            </div>
            <div className="signup-link">
              Not a member? <a href="./signup">Sign up now</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
