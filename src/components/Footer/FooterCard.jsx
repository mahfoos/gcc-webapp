import React from "react";
import "./Footer-card.style.scss";

const FooterCard = ({ title, subtitle, src }) => {
  return (
    <div className="footer-card-container">
      <div className="image">
        <img src={src} alt={title} />
      </div>
      <div className="deatils">
        <p>{title}</p>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default FooterCard;
