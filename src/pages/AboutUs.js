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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam distinctio
        esse minus consequatur ab cumque quas numquam aut, ducimus, nemo
        dignissimos ea sunt facere molestiae culpa. Labore vitae nisi quos
        provident unde repellendus ducimus, eaque, natus molestias et iure
        sapiente est illo. Odit delectus enim molestiae, eos distinctio dolorem
        debitis ab. Neque atque enim ducimus dolorum quis porro eum alias dicta
      </p>
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

      <WhyGCCargo />
      <MobileSupport />
    </section>
  );
};

export default AboutUs;
