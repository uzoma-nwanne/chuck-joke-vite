import "./button.styles.scss";

const Button = ({ label, icon, color, bg, onClick }) => {
  return (
    <button
      style={{ color: color, backgroundColor: bg }}
      className="my-button"
      onClick={onClick}
      type="button"
    >
      {" "}
      {label}{" "}
      <span className="button-span">
        {" "}
        <img src={icon} />
      </span>
    </button>
  );
};

export default Button;
