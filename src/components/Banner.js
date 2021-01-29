import React from "react";
import "../styles/Banner.css";

function Banner() {
  return (
    <div className="banner">
      <div className="banner-title">
        <h1>Simplify how your team works today.</h1>
      </div>
      <div className="banner-btn">
        <button id="btn" class="banner-btn">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Banner;
