import React, { useEffect, useState } from "react";

import Banners from "../components/Banner/Banners";
import { slides } from "../data/Banner.data";
const Home = () => {
  const [slide, setSlide] = useState(0);
  const lenOfSlides = slides.length - 1;

  const nextSlide = () => {
    setSlide((prev) => (prev === lenOfSlides ? (prev = 0) : prev + 1));
  };

  const pervSlide = () => {
    setSlide((next) => (next === 0 ? (next = lenOfSlides) : next - 1));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlide((slide) => (slide === lenOfSlides ? (slide = 0) : slide + 1));
    }, 4000);
    return () => clearTimeout(timer);
  }, [slide, lenOfSlides]);

  const goSlide = (slide = 0) => {
    setSlide(slide);
  };

  return (
    <Banners
      pervSlide={pervSlide}
      nextSlide={nextSlide}
      slides={slides}
      slide={slide}
      goSlide={goSlide}
    />
  );
};

export default Home;
