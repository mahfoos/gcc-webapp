import React, { useEffect, useState } from "react";
import Button from "../components/Button/Index";
import Input from "../components/Input/Index";
import MobileSupport from "../components/Service/MobileSupport";
import "../styles/TrackOrder.scss";
import { useLocation, useSearchParams } from "react-router-dom";

const TrackOrder = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [classes, setClasses] = useState(["ready", "ready", "ready", "ready", "ready", "ready"]);
  const [estimatedDelivery, setEstimatedDelivery] = useState("");
  const [location] = useSearchParams();

  const trackOrder = async (e) => {
    e?.preventDefault();
    try {
      const response = await fetch('https://us-central1-gcc-webapp-4db80.cloudfunctions.net/getOrderStatus', {
        method: 'POST',
        mode: "cors",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          orderId: location.get('trackingNumber') || trackingNumber
        })
      });
      console.log(response);
      const data = await response.json();
      const status = data.status;
      if (status === "collected") {
        setClasses(["wip", "ready", "ready", "ready", "ready", "ready"]);
      } else if (status === "ware-house-in") {
        setClasses(["done", "wip", "ready", "ready", "ready", "ready"]);
      } else if (status === "dispatched") {
        setClasses(["done", "done", "wip", "ready", "ready", "ready"]);
      } else if (status === "LK Customs") {
        setClasses(["done", "done", "done", "wip", "ready", "ready"]);
      } else if (status === "Out Of Deliver") {
        setClasses(["done", "done", "done", "done", "wip", "ready"]);
      } else if (status === "Delivered") {
        setClasses(["done", "done", "done", "done", "done", "wip"]);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
    trackOrder()
  }, []);

  return (
    <section className="track-order-container">
      <form onSubmit={trackOrder}>
        <label>Enter Tracking Number</label>
        <Input RequestPickUp={true} required={true} name="trackingNumber"
          onchange={(e) => setTrackingNumber(e.target.value)} />
        <Button content="Track" type="primary" />
      </form>

      <div className="track">
        <h3>Your freight on the way to your destination! {estimatedDelivery}</h3>

        <ul className="stepper">
          <li className={classes[0]}>
            <div className="item">Order Received</div>
          </li>
          <li className={classes[1]}>
            <div className="item">Warehouse In</div>
          </li>
          <li className={classes[2]}>
            <div className="item">Dispatched</div>
          </li>
          <li className={classes[3]}>
            <div className="item">LK Customs</div>
          </li>
          <li className={classes[4]}>
            <div className="item">Out for Deliver</div>
          </li>
          <li className={classes[5]}>
            <div className="item">Delivered</div>
          </li>
        </ul>
      </div>
      <MobileSupport />
    </section>
  );
};

export default TrackOrder;
