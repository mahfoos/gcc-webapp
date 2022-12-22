import React from "react";
import {
  FaFacebookF,
  FaInstagramSquare,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import "../Header/header.styles.scss";
const Header = () => {
  return (
    <header>
      <div className="header__container">
        <div className="contact-details">
          <p>
            Phone: Qatar (5000 41 78 | 5000 41 76) UAE (052 7450 800 , 052 7385
            800)
          </p>
          <p>E-mail: info@newgccargo.com</p>
        </div>

        <ul className="header-lists">
          <li className="header-list">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF className="icon" size={18} />
            </a>
          </li>
          <li className="header-list">
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
              <FaYoutube className="icon" size={18} />
            </a>
          </li>
          <li className="header-list">
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter className="icon" size={18} />
            </a>
          </li>
          <li className="header-list">
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <FaInstagramSquare className="icon" size={18} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
