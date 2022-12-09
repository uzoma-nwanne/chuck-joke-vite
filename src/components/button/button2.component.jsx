import "./button.styles.scss";

const Button2 = ({ label, icon, color, bg, onClick }) => {
  return (
    <button
      style={{ color: color, backgroundColor: bg }}
      className="my-button2"
      onClick={onClick}
      type="button"
    >
      <span className="button-span2">
        <img src={icon} />
      </span>{" "}
      {label}{" "}
    </button>
  );
};

export default Button2;
