import React from "react";
import "../OverLay/OverLay.style.scss";
const OverLay = ({ isOpen, toggleSideBar }) => {
  return (
    <div
      onClick={toggleSideBar}
      className={isOpen ? "overlay active" : "overlay"}
    />
  );
};

export default OverLay;
