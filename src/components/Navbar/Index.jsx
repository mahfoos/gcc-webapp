import React from "react";
import { Link } from "react-router-dom";
import "../Navbar/NavBar.style.css";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/delivery-logo-design-template-a4d80ebb3305fef2afe82c687e994b6b_screen.jpg?ts=1601987386"
          alt="logo"
        />
      </div>
      <div className="nav-right">
        <ul className="nav-links">
          <li className="nav-link">
            <Link>Home</Link>
          </li>
          <li className="nav-link">
            <Link>Services</Link>
          </li>
          <li className="nav-link">
            <Link>About Us</Link>
          </li>
          <li className="nav-link">
            <Link className="btn-request-pickup">request pickup</Link>
          </li>
        </ul>
        <div className="profile-pic">
          <img
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/delivery-logo-design-template-a4d80ebb3305fef2afe82c687e994b6b_screen.jpg?ts=1601987386"
            alt=""
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
