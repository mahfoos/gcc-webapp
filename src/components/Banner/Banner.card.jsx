import { Link } from "react-router-dom";
import Button from "../Button/Index";
import QR from "../../assets/sampleqr-white.png";
import AppStore from "../../assets/app-store.webp";
import PlayStore from "../../assets/get-it-on-google-play-badge.webp";
import "./Banner.card.style.scss";
const Bannercard = ({ slide }) => {
  return (
    <div className="banner-card">
      <div className="card-left">
        <h1>{slide.title}</h1>
        <h2>{slide.title2}</h2><br />
        <p>{slide.description}</p>
        <div className="banner-card-btn">
          <Link to="/request-pickup">
            <Button margin="5px" content="Request Pick Up" type="primary" />
          </Link>
          <Link to="/track-order">
            <Button margin="5px" content="Track your Order" type="secondary" />
          </Link>
        </div>
      </div>
      {slide.downloadApp && (
        <div className="card-right">
          <h2>Now shipping has become easy with us</h2>
          <p>Download Now</p>
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
      )}
    </div>
  );
};

export default Bannercard;
