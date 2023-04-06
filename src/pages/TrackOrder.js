import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import Button from "../components/Button/Index";
import Input from "../components/Input/Index";
import MobileSupport from "../components/Service/MobileSupport";
import { db } from "../firebase";
import "../styles/TrackOrder.scss";

const TrackOrder = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [classes, setClasses] = useState(["ready", "ready", "ready", "ready", "ready", "ready"]);
  const [estimatedDelivery, setEstimatedDelivery] = useState("");

  const trackOrder = async (e) => {
    console.log(trackingNumber);
    e.preventDefault();
    const q = query(collection(db, "req-pick-up"), where("orderId", "==", `${trackingNumber}`));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.docs.length > 0) {
      const docSnap = querySnapshot.docs[0];
      const { status } = docSnap.data();
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
    } else {
      console.log("No such document!");
      setClasses(["ready", "ready", "ready", "ready", "ready", "ready"]);
    }
  }

  useEffect(() => {
    //window.scrollTo({ top: 0, left: 0 })
    const searchParams = new URLSearchParams(window.location.search);
    const queryTrackingNumber = searchParams.get("trackingNumber");

    if (queryTrackingNumber) {
      setTrackingNumber(queryTrackingNumber);
      //trackOrder({ preventDefault: () => {} }); // Manually trigger the track order function
      //console.log(trackingNumber);
    }
  }, [])

  useEffect(() => {
    if (trackingNumber) {
      trackOrder({ preventDefault: () => {} }); // Manually trigger the track order function
    }
  }, [trackingNumber]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
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
