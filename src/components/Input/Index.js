import "./Input.styles.scss";
const Input = ({ type, placeholder, RequestPickUp, required }) => {
  return (
    <input
      className={RequestPickUp ? "input" : "input"}
      placeholder={placeholder}
      required={required}
      type={type}
    />
  );
};

export default Input;
