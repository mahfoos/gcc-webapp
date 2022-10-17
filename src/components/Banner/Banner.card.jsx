import { Link } from "react-router-dom";
import Button from "../Button/Index";
import "./Banner.card.style.scss";
const Bannercard = () => {
  return (
    <div className="banner-card">
      <Link to="/request-pickup">
        <Button margin="5px" content="Request Pick Up" type="primary" />
      </Link>
      <Link to="/track-order">
        <Button margin="5px" content="Track your Order" type="secondary" />
      </Link>
    </div>
  );
};

export default Bannercard;
