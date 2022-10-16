import React from "react";
import "./Service.style.scss";
const Service = ({ title, logo, description }) => {
  return (
    <div className="service">
      <div className="service-header">
        <img src="" alt={logo} />
        <p>{title}</p>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default Service;
