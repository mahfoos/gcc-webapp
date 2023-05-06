import React from "react";

import Logo from "../../assets/LOGO.webp";
import { foter_card } from "../../data/footer.card";
import "../Footer/Footer.styles.scss";
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
            <h4>About Us</h4>
            <p>
              GC Cargo is the best cargo service provider in Qatar. Specializing in door-to-door, door-to-port delivery with online tracking and online booking platform. GC Cargo functions with the highest confidence and provide a reliable, efficient and low-cost cargo services to both individuals and corporates.
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
          Copyright &copy; {date}. All Rights Reserved.Design by ClanCode Labs
        </p>
      </div>
    </footer>
  );
};

export default Footer;
