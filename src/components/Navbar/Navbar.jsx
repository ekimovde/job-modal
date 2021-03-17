import React from "react";
import { Link } from "react-router-dom";

import brandImg from "assets/brand.png";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="navbar__link">
        <h1 className="navbar__title">Тестовое задание</h1>
      </Link>

      <img src={brandImg} alt="" className="navbar__image" />
    </div>
  );
};

export default Navbar;
