import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearch } from "../../features/search-slice";

//import { setSearch } from "../../features/search-slice";
import "./hero.styles.scss";
const Hero = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchField, setSearchField] = useState("");
    const handleSearchClick = (e) => {
        e.preventDefault();
        dispatch(setSearch(searchField.toLocaleLowerCase()));
        navigate("/search");
      };
    
      const handleSearchChange = (e) => {
        setSearchField(e.target.value);
      };
  return (
    <div className="hero-area">
      <div className="hero-text">
        <h4>The Joke Bible</h4>
        <p>Daily Laughs for you and yours</p>
      </div>
      <form>
        <input
          type="text"
          placeholder="How can we make you laugh today?"
          value={searchField}
          onChange={handleSearchChange}
        ></input>
        <button
          type="button"
          className="search"
          onClick={handleSearchClick}
        ></button>
      </form>
    </div>
  );
};

export default Hero;
