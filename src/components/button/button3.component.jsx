import "./button.styles.scss";

const Button3 = ({ label, icon, color, bg, onClick }) => {
  return (
    <button
      style={{ color: color, backgroundColor: bg }}
      className="my-button2"
      onClick={onClick}
      type="button"
    >
     {label}
      <span className="button-span2">
        <img src={icon} />
      </span>{" "}
      
    </button>
  );
};

export default Button3;
