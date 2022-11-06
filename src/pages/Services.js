import React from "react";
import MobileSupport from "../components/Service/MobileSupport";
import Service from "../components/Service/Service";
import { services } from "../data/service.data";
import "../styles/Service.scss";
const Services = () => {
  return (
    <section className="service-container">
      <div
        style={{
          // padding: "15px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "15px",
        }}
      >
        {services.map((service, index) => (
          <Service {...service} key={index} />
        ))}
      </div>
      <MobileSupport />
    </section>
  );
};

export default Services;
