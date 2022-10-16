import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import Bannercard from "./Banner.card";
import "./Banner.style.scss";
const Banners = ({ slides, slide, nextSlide, pervSlide, goSlide }) => {
  return (
    <div className="banner-container">
      <BsArrowRight
        onClick={nextSlide}
        className="arrow bs-arrow-right"
        size={40}
      />
      <BsArrowLeft
        onClick={pervSlide}
        className="arrow bs-arrow-left"
        size={40}
      />
      {slides.map((_slide, index) => {
        return (
          <React.Fragment key={index}>
            <div
              className={slide === index ? "banner active" : "banner"}
              style={{
                backgroundImage: `url(${_slide.backgroundImage})`,
                transform: `translateX(-${slide * 100}%)`,
              }}
            >
              <Bannercard />
            </div>
          </React.Fragment>
        );
      })}
      <div className="dots">
        {slides.map((_, index) => (
          <span
            className={slide === index ? "dot active" : "dot"}
            key={index}
            onClick={() => goSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Banners;
