import React from "react";
import Logo from "../../assets/luxury_beauty_logo_mockup 1.png";
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
          {foter_card.map((card) => (
            <FooterCard {...card} />
          ))}
        </div>
        <div className="footer-quick-links">
          <article className="about-us">
            <h4>About us</h4>
            <p>
              Q Cargo provides local and international delivery and logistics
              services. Our team have unique skills and rich professional
              experience.
            </p>
          </article>
          <article className="about-us">
            <h4>About us</h4>
            <p>
              Q Cargo provides local and international delivery and logistics
              services. Our team have unique skills and rich professional
              experience.
            </p>
          </article>{" "}
          <article className="about-us">
            <h4>About us</h4>
            <p>
              Q Cargo provides local and international delivery and logistics
              services. Our team have unique skills and rich professional
              experience.
            </p>
          </article>
          <article className="subscribe">
            <h4>Subscribe</h4>
            <input
              style={{
                outline: "none",
                border: "2px solid #c3cacd",
                padding: "5px",
                height: "40px",
                width: "100%",
                borderRadius: "10px",
                margin: "10px 0",
                background: "transparent",
                color: "#c3cacd",
                fontSize: "14px",
              }}
              type="email"
              placeholder="E-mail"
            />
            <p>
              Get the latest company’s news, advice on logistics, discounts and
              more!
            </p>
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
