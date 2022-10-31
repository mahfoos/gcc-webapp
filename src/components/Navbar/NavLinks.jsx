import React from "react";

import { NavLink } from "react-router-dom";
import Button from "../Button/Index";
import "./NavLink.style.scss";

const NavLinks = ({ className, footer }) => {
  return (
    <React.Fragment>
      <ul className={className}>
        <li className="nav-link">
          <NavLink
            style={footer ? { color: "white" } : undefined}
            className={({ isActive }) => (isActive ? "active" : undefined)}
            to="/"
            end
          >
            Home
          </NavLink>
        </li>
        <li className="nav-link">
          <NavLink
            style={footer ? { color: "white" } : undefined}
            className={({ isActive }) => (isActive ? "active" : undefined)}
            to="/services"
          >
            Services
          </NavLink>
        </li>
        <li className="nav-link">
          <NavLink
            style={footer ? { color: "white" } : undefined}
            className={({ isActive }) => (isActive ? "active" : undefined)}
            to="/about-us"
          >
            About Us
          </NavLink>
        </li>

        <li className="nav-link">
          <NavLink
            style={footer ? { color: "white" } : undefined}
            to="/request-pickup"
          >
            {footer ? (
              "request pickup"
            ) : (
              <Button content="request pickup" type="primary" />
            )}
          </NavLink>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default NavLinks;
