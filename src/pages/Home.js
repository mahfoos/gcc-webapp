import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Banners from "../components/Banner/Banners";
import { slides } from "../data/Banner.data";
import Services from "./Services";
const Home = () => {
  const location = useLocation();
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
    }, 15000);
    return () => clearTimeout(timer);
  }, [slide, lenOfSlides]);

  const goSlide = (slide = 0) => {
    setSlide(slide);
  };

  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1))
      if (elem) {
        elem.scrollIntoView({ top: 700, behavior: "smooth" })
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }
  }, [location,])

  return (
    <>
      <Banners
        pervSlide={pervSlide}
        nextSlide={nextSlide}
        slides={slides}
        slide={slide}
        goSlide={goSlide}
      />

      <Services />
    </>
  );
};

export default Home;
