import Service from "./Service";
import { services } from "../../data/service.data";
import "./WhyGCCargo.style.scss";
import { useLocation } from "react-router-dom";

const WhyGCCargo = () => {
    const location = useLocation();

    return (
        <>
            <h1 className={location.pathname==="/" ? "title-right" : null}>
                Why is <span style={{ color: "#1a61bd" }}>GC Cargo</span> the best
                choice for you?
            </h1>

            <div className="cargo-details-container">
                <div className="services">
                    {services.map((service) => (
                        <Service
                            title="We are Reliable & Fast"
                            description="You will also be assured of timely and guranteed cargo delivery.there will be no loss and delived on promised time"
                            logo="https://www.kindpng.com/picc/m/134-1346406_transparent-background-flash-logo-png-png-download.png"
                        />
                    ))}
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
        </>
    );
};

export default WhyGCCargo;
