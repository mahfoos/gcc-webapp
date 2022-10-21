import React from "react";
import Logo from "../../assets/LOGO-01-2.png";
import "../Footer/Footer.styles.scss";
import NavLinks from "../Navbar/NavLinks";
import FooterCard from "./FooterCard";
const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="footer-container">
      <div className="footer-container-header">
        <div className="footer-logo">
          <img src={Logo} alt="logo" />
        </div>
        <FooterCard
          src="https://qexcargo.com/wp-content/uploads/2019/01/icon-footer-1.png"
          title="Phone"
          subtitle="Qatar : 0743233424"
        />
        <FooterCard
          src="https://qexcargo.com/wp-content/uploads/2019/01/icon-footer-2.png"
          title="Email"
          subtitle="admins@vecteezy.com"
        />
        <FooterCard
          src="	https://qexcargo.com/wp-content/uploads/2019/01/icon-footer-3.png"
          title="Opening hours"
          subtitle="Mon-Fri,12:00PM - 10.00PM"
        />
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
        <div className="quick-links">
          <h4>Quick Links</h4>
          <NavLinks color="primary" className="nav-links-sidebar" />
        </div>
        <article className="subscribe">
          <h4>Subscribe</h4>
          <input
            style={{
              outline: "none",
              padding: "5px",
              width: "70%",
              margin: "10px 0",
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
  );
};

export default Footer;
