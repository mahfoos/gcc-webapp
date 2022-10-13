import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import NavLinks from "../Navbar/NavLinks";
import "../SideBar/SideBar.style.scss";

const SideBar = ({ isOpen, toggleSideBar }) => {
  return (
    <div className={isOpen ? "sidebar active" : "sidebar"}>
      <GiHamburgerMenu
        onClick={toggleSideBar}
        size={30}
        className="hamburger"
        style={{ cursor: "pointer" }}
      />
      <NavLinks />
    </div>
  );
};

export default SideBar;
