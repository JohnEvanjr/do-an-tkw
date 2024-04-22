import React, { useState } from "react";
import "../Register/register.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  });

  const [formValid, setFormValid] = useState(true);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = () => {
    setAgreeTerms(!agreeTerms);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (values.password !== values.confirmPassword) {
      console.error("Mật khẩu không trùng khớp");
      setFormValid(false);
      return;
    }

    if (!agreeTerms) {
      console.error("Bạn cần đồng ý với điều khoản dịch vụ");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8081/register", values);

      console.log(response.data);
      navigate("/");//chuyển hướng
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="title">
            <span>Sign Up</span>
          </div>
          <form action="#" onSubmit={handleSubmit}>
            <div className="form-group">
              <i className="fas fa-envelope"></i>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
                onChange={handleInput}
              />
            </div>
            <div className="form-group">
              <i className="fas fa-user"></i>
              <input
                type="text"
                id="username"
                name="name"
                placeholder="Tên đăng nhập"
                required
                onChange={handleInput}
              />
            </div>
            <div className="form-group">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Mật khẩu"
                required
                onChange={handleInput}
              />
            </div>
            <div className="form-group">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                id="confirm-password"
                name="confirmPassword"
                placeholder="Xác nhận mật khẩu"
                required
                onChange={handleInput}
              />
            </div>
            {!formValid && (
              <p style={{ color: "red" }}>Mật khẩu không trùng khớp</p>
            )}
            <div className="form-check">
              <label>
                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={handleCheckboxChange}
                />
                <a>Tôi đồng ý với các <span>điều khoản dịch vụ</span></a>
              </label>
            </div>
            { !formValid &&(
              <p style={{color:"red"}}>Bạn chưa đồng ý với điều khoản và dịch vụ</p>
            )}
            <div className="form-button">
              <input type="submit" className="btn-signup" value="Sign Up" />
            </div>
            <div className="login-link">
              Is a member? <Link to="/login">Login now</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
