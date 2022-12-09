import JokeComponent from "../joke/joke.component";
import "./joke-container.styles.scss";

const JokeComponentContainer = ({ jokes, start, end }) => {
  return (
    <div className="joke-component-container">
      {jokes.result &&
        jokes.result.map((joke, index) => {
          if (start <= index && end > index) {
           return(<JokeComponent
            key={joke.id}
            icon={joke.icon_url}
            cat={joke.categories[0]}
            value={joke.value}
          />) ;
          }
        })}
    </div>
  );
};

export default JokeComponentContainer;
