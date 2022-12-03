import React, { useState, useEffect } from "react";

import { Link, useLocation } from "react-router-dom";
import "./NavLink.style.scss";
import "../Button/Button.style.scss";

const NavLinks = ({ className, footer }) => {
  const location = useLocation();
  const [hash, setHash] = useState("");
  const [path, setPath] = useState("");

  useEffect(() => {
    setHash(location.hash);
    setPath(location.pathname);
  }, [location]);

  return (
    <React.Fragment>
      <ul className={className}>
        <li className="nav-link">
          <Link
            style={footer ? { color: "white" } : undefined}
            className={path === "/" && hash === "" ? "active" : undefined}
            to="/"
          >
            Home
          </Link>
        </li>
        <li className="nav-link">
          <Link
            style={footer ? { color: "white" } : undefined}
            className={hash === "#services" ? "active" : undefined}
            to="/#services"
          >
            Services
          </Link>
        </li>
        <li className="nav-link">
          <Link
            style={footer ? { color: "white" } : undefined}
            className={path === "/about-us" ? "active" : undefined}
            to="/about-us"
          >
            About Us
          </Link>
        </li>

        <li className="nav-link">
          <Link
            style={footer ? { color: "white" } : undefined}
            to="/request-pickup"
            className={path === "/request-pickup" ? "active" : undefined}
          >
            {footer ? (
              "Request Pickup"
            ) : (
              <button
                className="nav-btn btn-primary"
              >REQUEST PICKUP</button>

            )}
          </Link>
        </li>

        <li className="nav-link">
          <Link
            style={footer ? { color: "white" } : undefined}
            to="/track-order"
            className={path === "/track-order" ? "active" : undefined}
          >
            {footer ? (
              "Track Your Order"
            ) : (
              <button
                className="nav-btn btn-secondary"
              >Track Your Order</button>
            )}
          </Link>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default NavLinks;
