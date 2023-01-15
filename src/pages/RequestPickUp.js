import React, { useEffect, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import Button from "../components/Button/Index";
import Input from "../components/Input/Index";
import { requestPickUpInput, countries } from "../data/request-pickup-input";
import { db } from "../firebase";
import "../styles/Request-to-pickup.scss";

const RequestPickUp = () => {
  const collectionRef = collection(db, "pick-up");
  const [formData, setFormData] = useState({
    cargoType: "DTD",
    movementType: "AIR",
    receiverCountry: "",
  });

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 })
  }, [])

  const handleSave = async (e) => {
    e.preventDefault()
    // console.log(formData)
    try {
      const docRef = await addDoc(collectionRef, formData);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <section className="request-pick-up">
      <h2>Submit Your Pick Up Request Here</h2>

      <form onSubmit={handleSave} className="request-pick-form">
        {requestPickUpInput.slice(0, 6).map(({ label, type, id, required, name }) => (
          <div className="request-pick-up-input" key={id}>
            <label>{label}</label>
            <Input RequestPickUp={true} type={type} required={required} name={name}
              onchange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} />
          </div>
        ))}

        <div className="cargo-type-select">
          <div className="request-pick-up-input">
            <label>Cargo Type/Movement Type*</label>
            <div className="togglebody">
              <div className="toggle">
                <input id="toggle-on" className="toggle toggle-left" name="movementType" type="radio"
                  value="AIR" checked={formData.movementType === "AIR"}
                  onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} />
                <label htmlFor="toggle-on" className="toggle-btn">AIR</label>
                <input id="toggle-off" className="toggle toggle-right" name="movementType" type="radio"
                  value="SEA" checked={formData.movementType === "SEA"}
                  onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} />
                <label htmlFor="toggle-off" className="toggle-btn">SEA</label>
              </div>
            </div>
          </div>
          <div className="request-pick-up-input">
            <div className="togglebody">
              <div className="toggle">
                <input id="toggle-on2" className="toggle toggle-left" name="cargoType" type="radio"
                  value="DTD" checked={formData.cargoType === "DTD"}
                  onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} />
                <label htmlFor="toggle-on2" className="toggle-btn">DTD</label>
                <input id="toggle-off2" className="toggle toggle-right" name="cargoType" type="radio"
                  value="DT PORT" checked={formData.cargoType === "DT PORT"}
                  onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} />
                <label htmlFor="toggle-off2" className="toggle-btn">DT PORT</label>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="request-pick-up-input"></div>

        {requestPickUpInput.slice(6, 11).map(({ label, type, id, required, name }) => (
          <div className="request-pick-up-input" key={id}>
            <label>{label}</label>
            <Input RequestPickUp={true} type={type} required={required} name={name}
              onchange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} />
          </div>
        ))}

        <div className="request-pick-up-input">
          <label>Receiver Country*</label>
          <div className="select-country">
            <select name="receiverCountry" id="country" value={formData.receiverCountry}
              onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}>
              <option value="" disabled>Select receiver country</option>
              {countries.map(({ country }) => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          </div>
        </div>

        {requestPickUpInput.slice(11).map(({ label, type, id, required, name }) => (
          <div className="request-pick-up-input" key={id}>
            <label>{label}</label>
            <Input RequestPickUp={true} type={type} required={required} name={name}
              onchange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} />
          </div>
        ))}

        <div className="request-pick-up-input">
          <label>Remarks</label>
          <textarea style={{ resize: "none" }} rows="4" cols="50" name="remarks"
            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} />
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
