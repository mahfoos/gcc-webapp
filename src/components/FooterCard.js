import React from "react";

const FooterCard = ({ Icon, title, subtitle }) => {
  return (
    <div className="footer-logo">
      <Icon size={27} />
      <div className="deatils" style={{ margin: "10px" }}>
        <p style={{ fontSize: "10px" }}>{title}</p>
        <p style={{ fontSize: "12px" }}>{subtitle}</p>
      </div>
    </div>
  );
};

export default FooterCard;
