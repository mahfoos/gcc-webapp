import React from "react";
import { services } from "../components/Services/data";
import Service from "../components/Services/Service";
const Services = () => {
  return (
    <section
      style={{
        padding: "15px 20px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "10px",
        height: "100%",
      }}
    >
      {services.map((service, index) => (
        <Service {...service} key={index} />
      ))}
    </section>
  );
};

export default Services;
