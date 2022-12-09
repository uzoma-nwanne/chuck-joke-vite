import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../utils/fetch.utils";
import { resetCount } from "../../features/pagination-slice";
import { setSearchJokes } from "../../features/search-slice";
import "./category.styles.scss";
import JokeFooter from "../../components/joke-footer/joke-footer.component";
import JokeSearchFooter from "../../components/joke-footer/joke-search-footer.component";


const SearchView = () => {
  const searchText = useSelector((state) => state.search.search);
  const count = useSelector((state) => state.paginationCounter.count);
  const jokeList = useSelector((state) => state.jokeStatistics.jokeList);
  const dispatch = useDispatch();
 
  //get All Jokes
  useEffect(() => {
    const searchJoke = async () => {
      const searchJokes = await fetchData(
        `https://api.chucknorris.io/jokes/search?query=${searchText}`
      );
      dispatch(setSearchJokes(searchJokes));
      dispatch(resetCount());
    };
    searchJoke();
  }, [searchText]);

  const jokeSearchResults = useSelector((state) => state.search.jokesFromSearch);
 console.log(jokeSearchResults)
  if(count >= jokeSearchResults.length){
    dispatch(resetCount());
  }  
  return (
    <div className="category-view">
        <div className="left">
        <div className="joke-container">
          <div className="joke-container__header">
            <div className="badge">
              {searchText? searchText : "Undefined"}
            </div>
            <p className="joke-container__header--trending">.Trending</p>
          </div>
          <p className="joke-value">{jokeSearchResults.result?.[count]?.value}</p>
        </div>
        <JokeSearchFooter jokesFromSearch={jokeSearchResults.result} length={jokeSearchResults.result?.length} joke={jokeSearchResults.result?.[count]}/>
        </div>

        {/* Right Div */}
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

export default SearchView;
