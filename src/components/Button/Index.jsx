import React from "react";
import "./Button.style.scss";
const Button = ({ type, content, margin }) => {
  return (
    <button
      style={{ margin: margin }}
      className={`btn ${type === "primary" ? "btn-primary" : "btn-secondary"}`}
    >
      {content}
    </button>
  );
};

export default Button;
