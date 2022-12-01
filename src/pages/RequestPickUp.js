import React, { useEffect } from "react";
import Button from "../components/Button/Index";
import Input from "../components/Input/Index";
import { requestPickUpInput } from "../data/request-pickup-input";
import "../styles/Request-to-pickup.scss";

const RequestPickUp = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 })
  }, [])

  return (
    <section className="request-pick-up">
      <h2>Submit Your Pick Up Request Here</h2>

      <form onSubmit={(e) => e.preventDefault()} className="request-pick-form">
        {requestPickUpInput.slice(0, 6).map(({ label, type, id, required }) => (
          <div className="request-pick-up-input" key={id}>
            <label>{label}</label>
            <Input RequestPickUp={true} type={type} required={required} />
          </div>
        ))}

        <div className="cargo-type-select">
          <div className="request-pick-up-input">
            <label>Cargo Type/Movement Type*</label>
            <div className="togglebody">
              <div className="toggle">
                <input id="toggle-on" class="toggle toggle-left" name="mType1" value="false" type="radio" checked/>
                <label for="toggle-on" class="toggle-btn">AIR</label>
                <input id="toggle-off" class="toggle toggle-right" name="mType1" value="true" type="radio" checked/>
                <label for="toggle-off" class="toggle-btn">SEA</label>
              </div>
            </div>
          </div>
          <div className="request-pick-up-input">
            <div className="togglebody">
              <div className="toggle">
                <input id="toggle-on2" class="toggle toggle-left" name="mType2" value="false" type="radio" checked />
                <label for="toggle-on2" class="toggle-btn">DTD</label>
                <input id="toggle-off2" class="toggle toggle-right" name="mType2" value="true" type="radio" checked/>
                <label for="toggle-off2" class="toggle-btn">DT PORT</label>
              </div>
            </div>
            {/* <div className="radio">
              <div className="radio-item">
                <input type="radio" id="radio-1" name="radio" value="1" checked/>
                <label for="radio-1">DTD</label>
              </div>
              <div className="radio-item">
                <input type="radio" id="radio-2" name="radio" value="2" checked/>
                <label for="radio-2">DT PORT</label>
              </div>
            </div> */}
          </div>
        </div>
        <br />
        <div className="request-pick-up-input"></div>

        {requestPickUpInput.slice(6, 11).map(({ label, type, id, required }) => (
          <div className="request-pick-up-input" key={id}>
            <label>{label}</label>
            <Input RequestPickUp={true} type={type} required={required} />
          </div>
        ))}

        <div className="request-pick-up-input">
          <label>Receiver Country*</label>
          <div className="select-country">
            <select name="country" id="country">
            </select>
          </div>
        </div>

        {requestPickUpInput.slice(11).map(({ label, type, id, required }) => (
          <div className="request-pick-up-input" key={id}>
            <label>{label}</label>
            <Input RequestPickUp={true} type={type} required={required} />
          </div>
        ))}

        <div className="request-pick-up-input">
          <label>Remarks</label>
          <textarea style={{ resize: "none" }} rows="4" cols="50" />
        </div>
        <br />
        <div className="request-pick-up-submit">
          <Button content="Submit" type="primary" />
        </div>
      </form>
    </section>
  );
};

export default RequestPickUp;
