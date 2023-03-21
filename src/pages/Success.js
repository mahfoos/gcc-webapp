import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { AiFillCheckCircle } from 'react-icons/ai';
import "../styles/Success.scss";

const SuccessPage = () => {
  const { docId } = useParams();
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };
  
  return (
    <div className="success-page">
      <div className="wrapper-1">
        <div className="wrapper-2">
          <div className="success-message">
            <AiFillCheckCircle className="check-icon" />
          </div>
          <p>Your request has been submitted successfully!</p>
          <p>Here is your order ID: {docId}</p>
          <button className="go-home" onClick={handleGoHome}>
            Go Home
          </button>
        </div>
      </div>
    </div>
  )
};

export default SuccessPage;