import React from "react";
import AppStore from "../../assets/app-store.png";
import PlayStore from "../../assets/google-play.png";
import "./MobileSupport.style.scss";
const MobileSupport = () => {
  return (
    <div className="mobile-support-container">
      <h3 className="mobile-support-title">Download our Mobile App Now</h3>
      <div className="mobile-support">
        <div className="mobile-support-button">
          <img src={AppStore} alt="" />
        </div>
        <div className="mobile-support-button">
          <img src={PlayStore} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MobileSupport;
