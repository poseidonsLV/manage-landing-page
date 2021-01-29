import React, { useState } from "react";
import "../styles/Header.css";
import Logo from "../images/logo.svg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className={`header ${isMenuOpen && "active"}`}>
        <img src={Logo} alt="logo" />
        <nav className="nav">
          <ul ckassName="nav-group">
            <li className="nav-group-item">Pricing</li>
            <li className="nav-group-item">Product</li>
            <li className="nav-group-item">About Us</li>
            <li className="nav-group-item">Careers</li>
            <li className="nav-group-item">Community</li>
          </ul>
        </nav>
        <button id="btn" className="get-started">
          Get Started
        </button>

        <div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`hamburger-menu ${isMenuOpen && "active"}`}
        >
          <div className="bar top"></div>
          <div className="bar middle"></div>
          <div className="bar bottom"></div>
        </div>
      </div>
      <nav className={`nav-mobile ${isMenuOpen && "active"}`}>
        <ul className="nav-group">
          <li className="nav-group-item">Pricing</li>
          <li className="nav-group-item">Product</li>
          <li className="nav-group-item">About Us</li>
          <li className="nav-group-item">Careers</li>
          <li className="nav-group-item">Community</li>
        </ul>
        <button id="btn" className="get-started-mobile">
          Get Started
        </button>
      </nav>
    </>
  );
}

export default Header;
