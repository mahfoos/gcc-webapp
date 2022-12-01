import Service from "./Service";
import "./WhyGCCargo.style.scss";
import { useLocation } from "react-router-dom";

import icFastReliable from "../../assets/whyGC/RELIABLE & FAST.svg"
import icCustomer from "../../assets/whyGC/24X7 CUSTOMER SERVICE.svg"
import icCompetitive from "../../assets/whyGC/COMPETITIVE PRICING.svg"
import icInsurance from "../../assets/whyGC/INSURANCE AND GURANTEE.svg"
import icTimeTracking from "../../assets/whyGC/REAL TIME TRACKING SERVICE.svg"
import icWarehouse from "../../assets/whyGC/WAREHOUSE STORAGE.svg"
import cargoPerson from "../../assets/whyGC/cargoPerson.png"

const WhyGCCargo = () => {
    const location = useLocation();

    return (
        <>
            <h1 className={`why-gc-title ${location.pathname === "/" ? "title-right" : null}`}>
                Why is <span style={{ color: "#1a61bd" }}>GC Cargo</span> the best
                choice for you?
            </h1>

            <div className="cargo-details-container">
                <div className="services">
                    <Service
                        title="We are Reliable & Fast"
                        logo={{ img: icFastReliable }}
                        description="You will also be assured of timely and guranteed cargo delivery.there will be no loss and delived on promised time"
                        location="whyCargo" />
                    <Service
                        title="Competitive Pricing"
                        logo={{ img: icCompetitive }}
                        description="You only need pay for the services it require.Low cost and are affodable cargo services in Qatar"
                        location="whyCargo" />
                    <Service
                        title="24x7 Customer Service"
                        logo={{ img: icCustomer }}
                        description="Our customer support team is always ready to assist you to deliver success for you."
                        location="whyCargo" />
                    <Service
                        title="Real Time Tracking Service"
                        logo={{ img: icTimeTracking }}
                        description="Free Real-time tracking is available to your freight through our technology portal, which includes geo-fencing and alert monitoring."
                        location="whyCargo" />
                    <Service
                        title="Insurance and Gurantee"
                        logo={{ img: icInsurance }}
                        description="Our shipments meet high-security requirements and we offer insurance coverage to provide protection goods while in transit."
                        location="whyCargo" />
                    <Service
                        title="Warehouse Storage"
                        logo={{ img: icWarehouse }}
                        description="Depending on you product, needs and requirements, we provide professional warehouse activities."
                        location="whyCargo" />
                </div>

                <div className="cargo-shipping">
                    <img
                        src={cargoPerson}
                        alt="cargoimage"
                    />
                </div>
            </div>
        </>
    );
};

export default WhyGCCargo;
