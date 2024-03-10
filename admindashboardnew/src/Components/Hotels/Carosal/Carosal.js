import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import "../Carosal/Carosal.css";

export const Carosal = ({ data }) => {
  // Check if data.slides is an array before using map function
  const slides = data.slides || []; // Use an empty array if data.slides is undefined
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
      {slides.map((item, idx) => (
        <img
          src={item.src}
          alt={item.alt}
          key={idx}
          className={idx === slide ? "slide" : "slide slide-hidden"}
        />
      ))}
      <BsArrowRightCircleFill onClick={nextSlide} className="arrow arrow-right" />
      <span className="indicators">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={idx === slide ? "indicator" : "indicator indicator-inactive"}
            onClick={() => setSlide(idx)}
          ></button>
        ))}
      </span>
    </div>
  );
};
