import React from "react";
import Button from "../components/Button/Index";
import Input from "../components/Input/Index";
import MobileSupport from "../components/Service/MobileSupport";
import "../styles/TrackOrder.scss";
const TrackOrder = () => {
  return (
    <section className="track-order-container">
      <form>
        <label>Enter Tracking Number</label>
        <Input RequestPickUp={true} />
        <Button content="Track" type="primary" />
      </form>
      <div className="track">
        <h3>Estimated Delivery by September 15</h3>

        <ul class="stepper">
          <li class="done">
            <div class="item">Order Received</div>
          </li>
          <li class="done">
            <div class="item">Warehouse In</div>
          </li>
          <li class="wip">
            <div class="item">Dispatced</div>
          </li>
          <li class="ready">
            <div class="item">LKCustoms</div>
          </li>
          <li class="ready">
            <div class="item">Colombo</div>
          </li>
          <li class="ready">
            <div class="item">Delivered</div>
          </li>
        </ul>
      </div>
      <MobileSupport />
    </section>
  );
};

export default TrackOrder;
