import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Index";
import Input from "../components/Input/Index";
import { requestPickUpInput, countries } from "../data/request-pickup-input";
import { db } from "../firebase";
import { requestPickUpValidation } from "../formValidations";
import "../styles/Request-to-pickup.scss";
const moment = require('moment-timezone');

const RequestPickUp = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [cargoType, setCombinedCargoType] = useState("");
  const [isCombined, setIsCombined] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState({
    cargoType: "AIR DTD",
    destinationCountry: "",
    status: "requested",
    collabs: {
        role:0
    },
    orderCreatedTime: moment().tz('Asia/Qatar').toDate(),
    originCountry: "Qatar",
    //pickUpTime: null
  });

  const [orderId, setInvoiceNumber] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 })
    const date = moment().tz('Asia/Qatar').format('YYYYMMDDHHmmss');
    setInvoiceNumber(`${date}`);
  }, [])


  const handleSubmit = (e) => {
    e.preventDefault();
    // form validation
    //setFormErrors(requestPickUpValidation(formData))
    const errors = requestPickUpValidation(formData);
    setFormErrors(errors);
    setIsSubmitted(true);
    if (!isCombined) {
      const newCombinedCargoType = `${formData.moveType} ${formData.carType}`;
      setCombinedCargoType(newCombinedCargoType);
      setIsCombined(true);
      setFormData({ 
        ...formData, 
        orderId, 
        cargoType: newCombinedCargoType,
        pickupTime: formData.DateTime.split('T')[1],
        pickupDate: formData.DateTime.split('T')[0]
      });
    } 
    else {
      setCombinedCargoType("");
      setIsCombined(false);
    }
  }

  useEffect(() => {
    const handleSave = async () => {
        const { DateTime, moveType, ...updatedFromData } = formData;

        const functionUrl = "https://us-central1-gcc-webapp-4db80.cloudfunctions.net/createOrder";
        const response = await fetch(functionUrl, {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(updatedFromData)
        });

        // On succcess Navigate to Success page
        if (response.ok) {
          setIsSubmitted(false);
          // On succcess Navigate to Success page
          navigate(`/Success/${orderId}`);
        }
        else {
          console.error("Error adding document: ", response.status);
          setIsSubmitted(false);
        }
    }

    // if there is no error, save the data to firebase
    if (Object.keys(formErrors).length === 0 && isSubmitted) {
      handleSave();
    } else {
      console.log(formErrors);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ formErrors, isSubmitted, navigate]);

  return (
    <section className="request-pick-up">
      <h2>Submit Your Pick Up Request Here</h2>

      <form onSubmit={handleSubmit} className="request-pick-form">
        {requestPickUpInput.slice(0, 6).map(({ label, type, id, required, name }) => (
          <div className={`request-pick-up-input ${formErrors[name] ? 'error' : ''}`} key={id}>
            <label>{label}</label>
            <Input RequestPickUp={true} type={type} required={required} name={name}
              onchange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}/>
              {formErrors[name] && <span className="error-message">{formErrors[name]}</span>}
          </div>
        ))}

        <div className="cargo-type-select">
          <div className="request-pick-up-input">
            <label>Cargo Type/Movement Type*</label>
            <div className="togglebody">
              <div className="toggle">
                <input id="toggle-on" className="toggle toggle-left" name="moveType" type="radio"
                  value="AIR" checked={formData.moveType === "AIR"}
                  onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} />
                <label htmlFor="toggle-on" className="toggle-btn">AIR</label>
                <input id="toggle-off" className="toggle toggle-right" name="moveType" type="radio"
                  value="SEA" checked={formData.moveType === "SEA"}
                  onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} />
                <label htmlFor="toggle-off" className="toggle-btn">SEA</label>
              </div>
            </div>
          </div>
          <div className="request-pick-up-input">
            <div className="togglebody">
              <div className="toggle">
                <input id="toggle-on2" className="toggle toggle-left" name="carType" type="radio"
                  value="DTD" checked={formData.carType === "DTD"}
                  onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} />
                <label htmlFor="toggle-on2" className="toggle-btn">DTD</label>
                <input id="toggle-off2" className="toggle toggle-right" name="carType" type="radio"
                  value="DT PORT" checked={formData.carType === "DT PORT"}
                  onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} />
                <label htmlFor="toggle-off2" className="toggle-btn">DT PORT</label>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="request-pick-up-input"></div>

        {requestPickUpInput.slice(6, 11).map(({ label, type, id, required, name }) => (
          <div className={`request-pick-up-input ${formErrors[name] ? 'error' : ''}`} key={id}>
            <label>{label}</label>
            <Input RequestPickUp={true} type={type} required={required} name={name}
              onchange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} />
              {formErrors[name] && <span className="error-message">{formErrors[name]}</span>}
          </div>
        ))}

        <div className="request-pick-up-input">
          <label>Receiver Country*</label>
          <div className="select-country">
            <select name="destinationCountry" id="country" value={formData.destinationCountry}
              onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}>
              <option value="" disabled>Select receiver country</option>
              {countries.map(({ country }) => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          </div>
        </div>

        {requestPickUpInput.slice(11).map(({ label, type, id, name }) => (
          <div className={`request-pick-up-input ${formErrors[name] ? 'error' : ''}`} key={id}>
            <label>{label}</label>
            <Input RequestPickUp={true} type={type} name={name}
              onchange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} />
              {formErrors[name] && <span className="error-message">{formErrors[name]}</span>}
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
