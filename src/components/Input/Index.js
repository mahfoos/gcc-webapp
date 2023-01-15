import "./Input.styles.scss";
const Input = ({ type, placeholder, RequestPickUp, required, name, onchange }) => {
  return (
    <input
      className={RequestPickUp ? "input active" : "input"}
      placeholder={placeholder}
      required={required}
      type={type}
      name={name}
      onChange={onchange}
    />
  );
};

export default Input;
