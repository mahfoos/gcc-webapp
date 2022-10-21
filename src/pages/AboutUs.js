import MobileSupport from "../components/Services/MobileSupport";
import Service from "../components/Services/Service";
import "../styles/About.scss";
const AboutUs = () => {
  return (
    <section className="about-container">
      <h1 className="about-title">
        About <span style={{ color: "#5eb2d5" }}>GC Cargo</span>
      </h1>
      <p className="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam distinctio
        esse minus consequatur ab cumque quas numquam aut, ducimus, nemo
        dignissimos ea sunt facere molestiae culpa. Labore vitae nisi quos
        provident unde repellendus ducimus, eaque, natus molestias et iure
        sapiente est illo. Odit delectus enim molestiae, eos distinctio dolorem
        debitis ab. Neque atque enim ducimus dolorum quis porro eum alias dicta
      </p>

      <h1>
        Why is <span style={{ color: "#5eb2d5" }}>GC Cargo</span> the best
        choice for you?
      </h1>

      <div className="cargo-details-container">
        <div className="services">
          <Service
            title="We are Reliable & Fast"
            description="You will also be assured of timely and guranteed cargo delivery.there will be no loss and delived on promised time"
            logo="https://www.kindpng.com/picc/m/134-1346406_transparent-background-flash-logo-png-png-download.png"
          />
          <Service
            title="Competitive Pricing"
            logo="https://www.pngitem.com/pimgs/m/168-1686702_cash-icon-image-png-icon-of-cash-transparent.png"
            description="You only need pay for the services it require.Low cost and are affodable cargo services in Qatar"
          />
          <Service
            title="24x7 Customer Service"
            logo="https://thumbs.dreamstime.com/b/icon-white-background-arrow-vector-customer-service-logo-round-196071786.jpg"
            description="isi quos provident underios isi quos provident underios"
          />
          <Service
            title="Real Time Tracking Service"
            logo="https://www.pngitem.com/pimgs/m/25-254151_website-clipart-world-wide-web-web-search-icon.png"
            description="isi quos provident underios isi quos provident underios"
          />
          <Service
            title="Insurance and Gurantee"
            logo="https://assets.materialup.com/uploads/c5486af6-fb0d-419d-9f43-2760bb10ee2f/preview.jpg"
            description="isi quos provident underios isi quos provident underios isi quos provident underios isi quos provident underios"
          />
          <Service
            title="Warehouse Storage"
            logo="https://static.vecteezy.com/system/resources/thumbnails/007/068/466/small/warehouse-factory-silhouette-logo-icon-symbol-illustration-design-vector.jpg"
            description="isi quos provident underios isi quos provident underios"
          />
        </div>

        <div className="cargo-shipping">
          <img
            src="	https://qexcargo.com/wp-content/uploads/2021/06/006.png"
            alt="cargoimage"
          />
        </div>
      </div>

      <MobileSupport />
    </section>
  );
};

export default AboutUs;
