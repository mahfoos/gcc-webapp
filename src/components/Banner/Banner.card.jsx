import { Link } from "react-router-dom";
import Button from "../Button/Index";
import "./Banner.card.style.scss";
const Bannercard = ({ slide }) => {
  return (
    <div className="banner-card">
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
  );
};

export default Bannercard;
