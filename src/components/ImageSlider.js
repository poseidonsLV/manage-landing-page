import React, { useEffect, useState } from "react";
import "../styles/ImageSlider.css";

function ImageSlider({ images }) {
  const [index, setIndex] = useState(0);
  const [testimonialUser, setTestimonialUser] = useState({});
  const slideRight = () => {
    setIndex((index + 1) % images.length);
  };

  const slideLeft = () => {
    const nextIndex = index - 1;
    if (nextIndex < 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(nextIndex);
    }
  };
  useEffect(() => {
    setTestimonialUser(images[index]);
  }, [index, images]);
  console.log(testimonialUser);

  return (
    <div className="imageSlider">
      <button onClick={slideLeft} id="btn">
        LEFT
      </button>
      <div className="testimonial-card">
        <div className="card-image">
          <img src={testimonialUser.image} alt="user-img" />
        </div>
        <div className="card-testimonial-user">
          <strong>{testimonialUser.name}</strong>
        </div>
        <div className="card-testimonial-text">
          <p>{testimonialUser.desc}</p>
        </div>
      </div>
      <button onClick={slideRight} id="btn">
        RIGHT
      </button>
    </div>
  );
}

export default ImageSlider;
