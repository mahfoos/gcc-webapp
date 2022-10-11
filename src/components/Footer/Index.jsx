import React from "react";
import { AiOutlineClockCircle, AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import "../Footer/Footer.styles.scss";
import FooterCard from "../FooterCard";
const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="footer-container">
      <div className="footer-container-header">
        <div className="footer-logo">
          <img
            src="https://img.freepik.com/premium-vector/express-delivery-label-courier-boy-riding-motor-bike-vector-logo_212474-453.jpg?w=2000"
            alt=""
          />
        </div>
        <FooterCard
          Icon={BsTelephone}
          title="Phone"
          subtitle="Qatar : 0743233424"
        />
        <FooterCard
          Icon={AiOutlineMail}
          title="Email"
          subtitle="admins@vecteezy.com"
        />
        <FooterCard
          Icon={AiOutlineClockCircle}
          title="Opening hours"
          subtitle="Mon-Fri,12:00PM - 10.00PM"
        />
      </div>
      <p style={{ textAlign: "center", fontSize: "14px" }}>
        Copyright &copy; {date}. All Rights Reserved.Design by Team
      </p>
    </div>
  );
};

export default Footer;
