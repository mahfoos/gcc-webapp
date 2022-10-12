import React from "react";

import "../SideBar/SideBar.style.scss";
const SideBar = ({ isOpen, toggleSideBar }) => {
  console.log(isOpen);
  return (
    <React.Fragment>
      <div
        onClick={toggleSideBar}
        className={isOpen ? "sidebar active" : "sidebar"}
      ></div>
    </React.Fragment>
  );
};

export default SideBar;
