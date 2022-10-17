import React from "react";
import Service from "../components/Services/Service";
import { services } from "../data/service.data";
const Services = () => {
  return (
    <section
      style={{
        padding: "15px 20px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "10px",
      }}
    >
      {services.map((service, index) => (
        <Service {...service} key={index} />
      ))}
    </section>
  );
};

export default Services;
