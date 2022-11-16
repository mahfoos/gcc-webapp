import React from "react";
import MobileSupport from "../components/Service/MobileSupport";
import Service from "../components/Service/Service";
import WhyGCCargo from "../components/Service/WhyGCCargo";
import { services } from "../data/service.data";
import "../styles/Service.scss";
const Services = () => {
  return (
    <section className="service-container" id="services">
      <h1 className="services-title">
        <span style={{ color: "#1a61bd" }}>Services</span> that we Offer
      </h1>
      <div
        style={{
          // padding: "15px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))",
          gap: "50px",
          paddingBottom: "70px",
        }}
      >
        {services.map((service, index) => (
          <Service {...service} key={index} />
        ))}
      </div>

      <WhyGCCargo />

      <div className="cards">
        <div className="card">
          <h2>+500</h2>
          <p>HAPPY CLIENTS</p>
        </div>
        <div className="card">
          <h2>+300</h2>
          <p>PERFECT AIR TRANSPORTATION</p>
        </div>
        <div className="card">
          <h2>+50</h2>
          <p>PERFECT AIR TRANSPORTATION</p>
        </div>
      </div>
      
      <MobileSupport />
    </section>
  );
};

export default Services;
