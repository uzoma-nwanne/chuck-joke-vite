import { useSelector } from "react-redux";

import PaginationContainer from "../../components/pagination-container/pagination-container.component";
import JokeComponentContainer from "../../components/joke-component-container/joke-container.component";
import CategoriesContainer from "../../components/categories-container/categories-container.component";

import "./home.styles.scss";

const Home = () => {
  const categories = useSelector((state) => state.selectedCategory.categories);
  const jokes = useSelector((state) => state.selectedCategory.jokes);
  const start = useSelector((state) => state.paginationCounter.start);
  const end = useSelector((state) => state.paginationCounter.end);
  jokes.result &&
    jokes.result.map((result) => {
        //console.log(result.value)
      result.categories && result.categories.map(category =>{
        if(category ==='explicit'){
            console.log(category);
        }
        
      })
    });

  return (
    <div className="home">
      <div className="main">
        <CategoriesContainer categories={categories} />
        <JokeComponentContainer jokes={jokes} start={start} end={end}/>
       </div>
     <PaginationContainer
        start={start}
        end={end}
      /> 
    </div>
  );
};
export default Home;
