import React, { useState } from "react";
import ScrollTrigger from 'react-scroll-trigger';
import Mobile from "../../assets/download.png";
import QR from "../../assets/sampleqr.png";
import AppStore from "../../assets/app-store.png";
import PlayStore from "../../assets/get-it-on-google-play-badge.png";
import "./MobileSupport.style.scss";
const MobileSupport = () => {
  const [showMobile, setShowMobile] = useState(false);

  return (
    <div className="mobile-support-section">
      <div className="mobile-support-container">
        <ScrollTrigger
          onEnter={() => setShowMobile(true)}
          onExit={() => setShowMobile(false)}
        >
          {showMobile && <img src={Mobile} alt="download-app" />}
        </ScrollTrigger>
        {/* {!showMobile && <img src={Mobile} className="opacity0" alt="download-app" />} */}
        <div className="mobile-support">
          <h1>Everything at your doorstep</h1>
          <h2>Download the app now</h2>
          <p>Download the free app and check your freight status, request pickup, and enjoy high-quality services, all on you mobile device from anywhere.</p>
          <div className="download-icons">
            <div className="mobile-support-button">
              <img src={AppStore} alt="" />
              <img src={PlayStore} alt="" />
            </div>
            <div className="mobile-support-qr">
              <img src={QR} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSupport;
