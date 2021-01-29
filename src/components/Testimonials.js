import React from "react";
import "../styles/Testimonials.css";
import ImageSlider from "./ImageSlider";
import { testimonialImg } from "../datas/testimonialImages";

function Testimonials() {
  return (
    <div className="testimonials">
      <h1 className="testimonials-title">What they’ve said</h1>
      <div style={{ margin: "30px" }} className="imgSlider">
        <ImageSlider images={testimonialImg} />
        <button
          style={{ marginTop: "20px" }}
          id="btn"
          className="testimonial-button"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Testimonials;
