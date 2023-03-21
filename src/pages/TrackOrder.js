import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import Button from "../components/Button/Index";
import Input from "../components/Input/Index";
import MobileSupport from "../components/Service/MobileSupport";
import { db } from "../firebase";
import "../styles/TrackOrder.scss";
const TrackOrder = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [classes, setClasses] = useState(["ready", "ready", "ready", "ready", "ready", "ready"]);
  const [estimatedDelivery, setEstimatedDelivery] = useState("September 15");

  const trackOrder = async (e) => {
    e.preventDefault();
    const docRef = doc(db, "pick-up", trackingNumber);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data());
      const { shippingStatus } = docSnap.data();
      if (shippingStatus === "Order Received") {
        setClasses(["wip", "ready", "ready", "ready", "ready", "ready"]);
      } else if (shippingStatus === "Warehouse In") {
        setClasses(["done", "wip", "ready", "ready", "ready", "ready"]);
      } else if (shippingStatus === "Dispatced") {
        setClasses(["done", "done", "wip", "ready", "ready", "ready"]);
      } else if (shippingStatus === "LKCustoms") {
        setClasses(["done", "done", "done", "wip", "ready", "ready"]);
      } else if (shippingStatus === "Out for Deliver") {
        setClasses(["done", "done", "done", "done", "wip", "ready"]);
      } else if (shippingStatus === "Delivered") {
        setClasses(["done", "done", "done", "done", "done", "wip"]);
      }
    } else {
      console.log("No such document!");
      setClasses(["ready", "ready", "ready", "ready", "ready", "ready"]);
    }
  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 })
  }, [])

  return (
    <section className="track-order-container">
      <form onSubmit={trackOrder}>
        <label>Enter Tracking Number</label>
        <Input RequestPickUp={true} required={true} name="trackingNumber"
          onchange={(e) => setTrackingNumber(e.target.value)} />
        <Button content="Track" type="primary" />
      </form>

      <div className="track">
        <h3>Estimated Delivery by {estimatedDelivery}</h3>

        <ul className="stepper">
          <li className={classes[0]}>
            <div className="item">Order Received</div>
          </li>
          <li className={classes[1]}>
            <div className="item">Warehouse In</div>
          </li>
          <li className={classes[2]}>
            <div className="item">Dispatced</div>
          </li>
          <li className={classes[3]}>
            <div className="item">LKCustoms</div>
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
