import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import Button from "../components/Button/Index";
import Input from "../components/Input/Index";
import MobileSupport from "../components/Service/MobileSupport";
import { db } from "../firebase";
import "../styles/TrackOrder.scss";
const TrackOrder = () => {
  const [trackingNumber, setTrackingNumber] = useState("");

  const trackOrder = async (e) => {
    e.preventDefault();
    const docRef = doc(db, "pick-up", trackingNumber);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      console.log("No such document!");
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
        <h3>Estimated Delivery by September 15</h3>

        <ul className="stepper">
          <li className="done">
            <div className="item">Order Received</div>
          </li>
          <li className="done">
            <div className="item">Warehouse In</div>
          </li>
          <li className="wip">
            <div className="item">Dispatced</div>
          </li>
          <li className="ready">
            <div className="item">LKCustoms</div>
          </li>
          <li className="ready">
            <div className="item">Colombo</div>
          </li>
          <li className="ready">
            <div className="item">Delivered</div>
          </li>
        </ul>
      </div>
      <MobileSupport />
    </section>
  );
};

export default TrackOrder;
