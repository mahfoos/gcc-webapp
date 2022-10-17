import React from "react";

import { Link } from "react-router-dom";
import Button from "../Button/Index";
import "./NavLink.style.scss";

const NavLinks = ({ className }) => {
  return (
    <React.Fragment>
      <ul className={className}>
        <li className="nav-link">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-link">
          <Link to="/services">Services</Link>
        </li>
        <li className="nav-link">
          <Link to="/about-us">About Us</Link>
        </li>
        <li className="nav-link">
          <Link to="/request-pickup">
            <Button content="request pickup" type="primary" />
          </Link>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default NavLinks;
