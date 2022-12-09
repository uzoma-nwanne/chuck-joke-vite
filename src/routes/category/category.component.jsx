import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../utils/fetch.utils";
import { resetCount } from "../../features/pagination-slice";

import { fetchAsyncAllJokes } from "../../features/category-slice";
import "./category.styles.scss";
import JokeFooter from "../../components/joke-footer/joke-footer.component";

const CategoryView = () => {

  //const trendingJokeList = jokeList.sort().filter((joke, index) => index < 10);
  const dispatch = useDispatch();
  const jokes = useSelector((state) => state.selectedCategory.jokes);
  const [filteredJokes, setFilteredJokes] = useState([]);
  const selectedCategory = useSelector(
    (state) => state.selectedCategory.selectedCategory
  );
  //get All Jokes
  useEffect(() => {
      setFilteredJokes(
        jokes.result.filter((joke) => joke.categories.toString().toLowerCase().includes(selectedCategory))
      );
    
  }, [selectedCategory]);


  const count = useSelector((state) => state.paginationCounter.count);
  const jokeList = useSelector((state) => state.jokeStatistics.jokeList);
  const loading = useSelector((state) => state.selectedCategory.loading);
  const error = useSelector((state) => state.selectedCategory.error);


  if (count >= filteredJokes.length) {
    dispatch(resetCount());
  }

  return (
    <div className="category-view">
      <div className="left">
        <div className="joke-container">
          <div className="joke-container__header">
            <div className="badge">
              {selectedCategory ? selectedCategory : "Undefined"}
            </div>
            <p className="joke-container__header--trending">.Trending</p>
          </div>
          <p className="joke-value">{filteredJokes[count]?.value}</p>
        </div>
        <div className="joke-footer"></div>
        <JokeFooter joke={filteredJokes[count]} filteredJokes={filteredJokes} />
      </div>
      {/* End Left Div */}

      <div className="right">
        <div className="trending">
          <h4 className="trending-header">THE TOP 10 JOKES</h4>
          <ul>
            {jokeList.map((joke) => (
              <li key={joke.id}>{joke.value}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CategoryView;
