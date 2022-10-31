import React from "react";
import "./Service.style.scss";
const Service = ({ title, logo, description }) => {
  return (
    <div className="service">
      <div className="service-header">
        <div className="image">
          <img src={logo} alt={title} />
        </div>
        <h2>{title}</h2>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default Service;
