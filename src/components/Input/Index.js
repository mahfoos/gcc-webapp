import "./Input.styles.scss";
const Input = ({ type, placeholder }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input type={type} placeholder={placeholder} />
    </form>
  );
};

export default Input;
