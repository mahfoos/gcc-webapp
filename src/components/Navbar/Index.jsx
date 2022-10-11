import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "../Navbar/NavBar.style.scss";
import NavLinks from "./NavLinks";

const Navbar = ({ toggleSideBar }) => {
  return (
    <nav>
      <div className="logo">
        <img
          src="https://img.freepik.com/premium-vector/express-delivery-label-courier-boy-riding-motor-bike-vector-logo_212474-453.jpg?w=2000"
          alt="logo"
        />
      </div>
      <NavLinks />
      <GiHamburgerMenu
        size={30}
        className="hamburger"
        onClick={toggleSideBar}
      />
    </nav>
  );
};

export default Navbar;
