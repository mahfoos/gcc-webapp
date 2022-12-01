import React from "react";
import MobileSupport from "../components/Service/MobileSupport";
import Service from "../components/Service/Service";
import WhyGCCargo from "../components/Service/WhyGCCargo";
import TransportationSummary from "../components/TrasportationsSummary/TransportationSummary";
import { services } from "../data/service.data";
import "../styles/Service.scss";
const Services = () => {
  return (
    <>
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

      </section>
      
      <TransportationSummary />
      <MobileSupport />
    </>
  );
};

export default Services;
