import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import Logo from "../../assets/luxury_beauty_logo_mockup 1.png";
import "../Navbar/NavBar.style.scss";
import Profile from "../Navbar/Profile";
import NavLinks from "./NavLinks";

const Navbar = ({ toggleSideBar, isOpen }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () =>
      window.scrollY > 50 ? setIsSticky(true) : setIsSticky(false)
    );
  }, []);

  return (
    <nav className={isSticky ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="logo" />
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
      </div>
    </nav>
  );
};

export default Navbar;
