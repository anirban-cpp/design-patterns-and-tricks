import React, { useEffect } from "react";

import "./Carousel.css";
import { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  if (!Array.isArray(slides) || slides.length === 0) return null;

  const prevSlide = () => {
    setCurrent((prevCurrent) =>
      prevCurrent === 0 ? length - 1 : prevCurrent - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prevCurrent) =>
      prevCurrent === length - 1 ? 0 : prevCurrent + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
        nextSlide();
    },5000)

    return () => clearInterval(interval)
  }, [])
  

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {slides.map((slide, idx) => (
        <div className={idx === current ? "slide-active" : "slide"} key={idx}>
          {idx === current && (
            <img src={slide.image} alt="" className="slider-image" />
          )}
        </div>
      ))}
    </section>
  );
};

export default Carousel;
