import React from "react";
import MobileSupport from "../components/Service/MobileSupport";
import Service from "../components/Service/Service";
import { services } from "../data/service.data";
const Services = () => {
  return (
    <React.Fragment>
      <section
        style={{
          padding: "15px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "15px",
        }}
      >
        {services.map((service, index) => (
          <Service {...service} key={index} />
        ))}
      </section>
      <MobileSupport />
    </React.Fragment>
  );
};

export default Services;
