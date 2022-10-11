import React from "react";
import "../SideBar/SideBar.style.scss";
const SideBar = ({ isOpen, toggleSideBar }) => {
  return (
    <div
      onClick={toggleSideBar}
      className={isOpen ? "active sidebar" : "sidebar"}
    >
      SideBar
    </div>
  );
};

export default SideBar;
