import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <div className="nav-right">
      <ul className="nav-links">
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
          <Link to="/request-pickup" className="btn-request-pickup">
            request pickup
          </Link>
        </li>
      </ul>
      <div className="profile-pic">
        <img
          src="https://img.freepik.com/premium-vector/express-delivery-label-courier-boy-riding-motor-bike-vector-logo_212474-453.jpg?w=2000"
          alt=""
        />
      </div>
      <IoIosArrowDown style={{ cursor: "pointer" }} />
    </div>
  );
};

export default NavLinks;
