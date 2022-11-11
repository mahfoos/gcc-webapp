import React from "react";
import Button from "../components/Button/Index";
import Input from "../components/Input/Index";
import { requestPickUpInput } from "../data/request-pickup-input";
import "../styles/Request-to-pickup.scss";

const RequestPickUp = () => {
  return (
    <section className="request-pick-up">
      <h2>Submit Your Pick Up Request Here</h2>

      <form onSubmit={(e) => e.preventDefault()} className="request-pick-form">
        {requestPickUpInput.map(({ label, type, id, required }) => (
          <div className="request-pick-up-input" key={id}>
            <label>{label}</label>
            <Input RequestPickUp={true} type={type} required={required} />
          </div>
        ))}
        <div className="request-pick-up-input">
          <label>Remarks</label>
          <textarea style={{ resize: "none" }} rows="4" cols="50" />
        </div>

        <Button content="submit" type="primary" />
      </form>
    </section>
  );
};

export default RequestPickUp;
