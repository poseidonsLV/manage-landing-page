import React from "react";
import "../styles/GetStarted.css";
import illustrationIntro from "../images/illustration-intro.svg";

function GetStarted() {
  return (
    <div className="getStarted">
      <div className="getStarted-left-container">
        <h1 className="getStarted-left-title">
          Bring everyone together to build better products.
        </h1>
        <p className="getStarted-left-description">
          {" "}
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <button id="btn" className="getStarted-left-button">
          {" "}
          Get Started
        </button>
      </div>
      <div className="getStarted-right-container">
        <img src={illustrationIntro} alt="illustration" />
      </div>
    </div>
  );
}

export default GetStarted;
