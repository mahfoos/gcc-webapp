import React from "react";

import Logo from "../../assets/luxury_beauty_logo_mockup 2.png";
import { foter_card } from "../../data/footer.card";
import "../Footer/Footer.styles.scss";
import Input from "../Input/Index";
import NavLinks from "../Navbar/NavLinks";
import FooterCard from "./FooterCard";
const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-container-header">
          <div className="footer-logo">
            <img src={Logo} alt="logo" />
          </div>
          {foter_card.map((card, index) => (
            <FooterCard key={index} {...card} />
          ))}
        </div>
        <div className="footer-quick-links">
          <article className="about-us">
            <h4>Mission</h4>
            <p>
              Q Cargo provides local and international delivery and logistics
              services. Our team have unique skills and rich professional
              experience.
            </p>
          </article>
          <article className="about-us">
            <h4>Quick Links</h4>
            <NavLinks footer={true} className="nav-links-sidebar" />
          </article>
        </div>
        <p
          style={{
            textAlign: "center",
            fontSize: "14px",
            color: "#fff",
            margin: "10px 0",
          }}
        >
          Copyright &copy; {date}. All Rights Reserved.Design by Team
        </p>
      </div>
    </footer>
  );
};

export default Footer;
