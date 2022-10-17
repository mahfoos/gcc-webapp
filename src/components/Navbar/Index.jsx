import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import "../Navbar/NavBar.style.scss";
import Profile from "../Navbar/Profile";
import NavLinks from "./NavLinks";

const Navbar = ({ toggleSideBar, isOpen }) => {
  return (
    <nav>
      <div className="logo">
        <img
          src="https://img.freepik.com/premium-vector/express-delivery-label-courier-boy-riding-motor-bike-vector-logo_212474-453.jpg?w=2000"
          alt="logo"
        />
      </div>
      <div className="nav-right">
        <NavLinks className="nav-links" />
        <Profile isOpen={isOpen} />
        {!isOpen && <IoIosArrowDown />}
      </div>
      <GiHamburgerMenu
        onClick={toggleSideBar}
        size={30}
        className="hamburger"
      />
    </nav>
  );
};

export default Navbar;
