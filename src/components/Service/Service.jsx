import React from "react";
import "./Service.style.scss";
const Service = ({ title, logo, description, location }) => {
  return (
    <div className={location === "whyCargo" ? "service about-service" : "service"}>
      <div className={location === "whyCargo" ? "service-header about-servie-header" : "service-header"}>
        <div className="image">
          <img src={logo.img} alt={title} />
        </div>
        <h2>{title}</h2>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default Service;
