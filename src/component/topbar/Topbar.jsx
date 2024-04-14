import "../topbar/topbar.css";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function TopBar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="top">
      <div className="topLeft">
        <a
          className="topIcon fa-brands fa-square-facebook"
          href="https://www.facebook.com/"
          target="blank"
        ></a>
        <a
          className="topIcon fa-brands fa-square-github"
          href="https://github.com/"
          target="blank"
        ></a>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <NavItem path="/" label="HOME" />
          <NavItem path="/about" label="ABOUT" />
          <NavItem path="/health" label="HEALTH" />
          <NavItem path="/workout" label="WORKOUT" />
          <NavItem path="/blog" label="BLOG" />
          <NavItem path="/shop" label="SHOP" />
        </ul>
      </div>
      <div className="topRight">
        <div
          className="dropdown"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="more">More</div>
          <div
            className={`dropdown-content ${isOpen ? "show" : ""}`}
            id="myDropdown"
          >
            <a href="#">Login</a>
            <a href="#">Register</a>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavItem({ path, label }) {
  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <li className="topListItem">
      <Link
        className={`link ${isActive ? "active" : ""}`}
        to={path}
      >
        {label}
      </Link>
    </li>
  );
}
