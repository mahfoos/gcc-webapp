import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Index";
import "./Banner.card.style.scss";
const Bannercard = () => {
  return (
    <div className="banner-card">
      <Link to="/request-pickup">
        <Button content="Request Pick Up" type="primary" />
      </Link>
      <Link to="/track-order">
        <Button content="Track your Order" type="secondary" />
      </Link>
    </div>
  );
};

export default Bannercard;
