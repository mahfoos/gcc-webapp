import { useEffect } from "react";
import MobileSupport from "../components/Service/MobileSupport";
import Service from "../components/Service/Service";
import WhyGCCargo from "../components/Service/WhyGCCargo";
import { services } from "../data/service.data";
import "../styles/About.scss";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 })
  }, [])

  return (
    <section className="about-container" id="about-us">
      <h1 className="about-title">
        About <span style={{ color: "#1a61bd" }}>GC Cargo</span>
      </h1>
      <p className="description">
        With the experience and the aptitude of serving, GC Cargo is the best cargo service provider in Qatar. Specializing in door-to-door, doot-to-port delivery with online tracking and online booking platform. GC Cargo functions with the highest confidence and provide a reliable, efficient and low-cost cargo services to both individuals and corporates.
      </p>
      <p className="description">
        With the strength of an experienced and talented team, GC Cargo maintains high service standards with the optimum levels of quality to ensure that your packages and documents are handled by professionals. With a large network, We Ships you freight to Sri Lanka, India, Pakistan, Bangladesh, Thailand, Indonesia and Nepal from Qatar.
      </p>
      <p className="description">
        GC Cargo also possesses a strong background in logistics management. As a result of the trust, we have been maintaining with our corporate clients, today GC Cargo serves as the official cargo for numerous entities in Qatar.
      </p>

      <br />

      <WhyGCCargo />
      <MobileSupport />

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

    </section>
  );
};

export default AboutUs;
