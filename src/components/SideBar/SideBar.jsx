import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import NavLinks from "../Navbar/NavLinks";
import Profile from "../Navbar/Profile";
import "../SideBar/SideBar.style.scss";

const SideBar = ({ isOpen, toggleSideBar }) => {
  return (
    <div className={isOpen ? "sidebar active" : "sidebar"}>
      <AiOutlineClose onClick={toggleSideBar} size={30} className="close" />
      <div className="sidebar-links">
        <NavLinks isOpen={isOpen} className="nav-links-sidebar" />
        <Profile />

        {isOpen && <button className="signout">signout</button>}
      </div>
    </div>
  );
};

export default SideBar;
