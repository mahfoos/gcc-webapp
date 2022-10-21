import React from "react";
import Service from "../components/Services/Service";
import { services } from "../data/service.data";
const Services = () => {
  return (
    <section
      style={{
        padding: "15px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "15px",
      }}
    >
      {services.map((service, index) => (
        <Service {...service} key={index} />
      ))}
    </section>
  );
};

export default Services;
