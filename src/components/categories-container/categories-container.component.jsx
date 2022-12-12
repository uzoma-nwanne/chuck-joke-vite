import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setCategory } from "../../features/category-slice";
import CategoryButton from "../category-button/category-button.component";
import "./categories-container.styles.scss";

const CategoriesContainer = ({ categories, allJokes }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (e) => {
    dispatch(setCategory(e.target.value));
    navigate("/category");
  };

  const color = [
    "red",
    "blue",
    "gold",
    "yellow",
    "purple",
    "grey",
    "fuschia",
    "green",
  ];
  const total = Object.entries(categories).length;

  return (
    <div className="categories-container">
      {Object.entries(categories).map(([key, value], index = 0) => {
        let no = 0;
        if (index !== 0) {
          no = total % index;
        }
        const myColor = color[no];
        return (
          <CategoryButton
            category={value}
            color={myColor}
            key={key}
            onClick={handleClick}
          />
        );
        index++;
      })}
      <CategoryButton
        category={"Unclassified"}
        color={"f2f2f2"}
        key={"f2f2"}
        onClick={handleClick}
      />
    </div>
  );
};

export default CategoriesContainer;
