import React from "react";
import "./Button.style.scss";
const Button = ({ type, content }) => {
  return (
    <button
      className={`btn ${type === "primary" ? "btn-primary" : "btn-secondary"}`}
    >
      {content}
    </button>
  );
};

export default Button;
