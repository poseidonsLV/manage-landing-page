import React, { useState } from "react";
import "../styles/Footer.css";
import Logo from "../images/logo.svg";
import Facebook from "../images/icon-facebook.svg";
import Youtube from "../images/icon-youtube.svg";
import Twitter from "../images/icon-twitter.svg";
import Pinterest from "../images/icon-pinterest.svg";
import Instagram from "../images/icon-instagram.svg";

function Footer() {
  const [succMsg, setSuccMsg] = useState("");

  function onEmailSubmit(e) {
    e.preventDefault();
    setSuccMsg("Succesfully added email");
    setTimeout(() => {
      setSuccMsg("");
    }, 4000);
  }

  return (
    <div className="footer">
      <div className="footer-container">
        <div id="column" className="col-1">
          <div className="row-1">
            <img src={Logo} alt="logo" />
          </div>
          <div id="footer-social-medias" className="row-2">
            <img src={Facebook} alt="" />
            <img src={Youtube} alt="" />
            <img src={Twitter} alt="" />
            <img src={Pinterest} alt="" />
            <img src={Instagram} alt="" />
          </div>
        </div>
        <div id="column" className="col-2">
          <ul className="col-group">
            <li className="col-group-item">Home</li>
            <li className="col-group-item">Pricing</li>
            <li className="col-group-item">Products</li>
            <li className="col-group-item">About Us</li>
          </ul>
        </div>
        <div id="column" className="col-3">
          <ul className="col-group">
            <li className="col-group-item">Careers</li>
            <li className="col-group-item">Community</li>
            <li className="col-group-item">Privacy Policy</li>
          </ul>
        </div>
        <div id="column" className="col-4">
          <div className="row-1">
            <form onSubmit={onEmailSubmit} className="form-submit">
              <label
                id="email-input-msg"
                class="succ"
                styles={succMsg.length > 1 && { color: " hsl(154, 88%, 33%)" }}
              >
                {succMsg}
              </label>
              <input
                required
                type="text"
                placeholder="Updates in your inbox…"
              />
              <button id="btn" type="submit" className="form-submit-btn">
                Go
              </button>
            </form>
          </div>
          <div className="row-2">
            <p className="copyright-text">
              Copyright 2020. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
