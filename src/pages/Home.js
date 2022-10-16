import React, { useEffect, useState } from "react";

import Banners from "../components/Banner/Banners";

const Home = () => {
  const slides = [
    {
      backgroundImage:
        "https://telegraphstar.com/wp-content/uploads/2019/07/money-hiest-season-3.jpeg",
    },
    {
      backgroundImage:
        "https://images.ctfassets.net/4cd45et68cgf/7JiW5JIJZaNi0LBJXQCuON/28ee69e49f0ca93e29adc4464e82f358/EN-US_MyNameS1_Teaser_Solo_Horizontal_RGB_PRE.jpg?w=2560",
    },
    {
      backgroundImage:
        "https://magarila.com/the-witcher-season-2-posters/the-witcher-season-2-poster-2/",
    },
    {
      backgroundImage: "https://pbs.twimg.com/media/EpGJvVjU0AA6YuT.jpg",
    },
    {
      backgroundImage:
        "https://www.dreadcentral.com/wp-content/uploads/2017/10/the-punisher-banner-copertina.jpg",
    },
    {
      backgroundImage:
        "https://telegraphstar.com/wp-content/uploads/2019/07/money-hiest-season-3.jpeg",
    },
    {
      backgroundImage:
        "https://images.ctfassets.net/4cd45et68cgf/7JiW5JIJZaNi0LBJXQCuON/28ee69e49f0ca93e29adc4464e82f358/EN-US_MyNameS1_Teaser_Solo_Horizontal_RGB_PRE.jpg?w=2560",
    },
    {
      backgroundImage:
        "https://magarila.com/the-witcher-season-2-posters/the-witcher-season-2-poster-2/",
    },
    {
      backgroundImage: "https://pbs.twimg.com/media/EpGJvVjU0AA6YuT.jpg",
    },
    {
      backgroundImage:
        "https://www.dreadcentral.com/wp-content/uploads/2017/10/the-punisher-banner-copertina.jpg",
    },
  ];
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
