import { useNavigate } from "react-router-dom";
import "./category-button.styles.scss";




const CategoryButton = ({category, color, onClick}) => {
    return(
    <button className="category-div" style={{ backgroundColor : color}} type="button" onClick={onClick} value={category} >{category}</button>
    );
}

export default CategoryButton;