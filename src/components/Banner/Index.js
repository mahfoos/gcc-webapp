import React from "react";
import Bannercard from "./Banner.card";
import "./Banner.style.scss";
const Banner = () => {
  return (
    <div
      className="banner"
      style={{
        backgroundImage:
          "url(https://images.ctfassets.net/4cd45et68cgf/7JiW5JIJZaNi0LBJXQCuON/28ee69e49f0ca93e29adc4464e82f358/EN-US_MyNameS1_Teaser_Solo_Horizontal_RGB_PRE.jpg?w=2560)",
      }}
    >
      <Bannercard />
    </div>
  );
};

export default Banner;
