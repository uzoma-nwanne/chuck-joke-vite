import { useDispatch, useSelector } from "react-redux";
import { nextCount, previousCount, resetCount } from "../../features/pagination-slice";
import { likeJoke, dislikeJoke } from "../../features/statistics-slice";

import Button2 from "../button/button2.component";
import Button3 from "../button/button3.component";
import upVoteIcon from "../../assets/02/hand.png";
import downVoteIcon from "../../assets/02/hand-copy.png";
import nextIcon from "../../assets/02/path-copy-3.png"
import prevIcon from "../../assets/02/path-copy-reverse-3.png"
import "./joke-footer.styles.scss";
const JokeFooter = ({joke,filteredJokes}) => {
    const dispatch = useDispatch();
    const jokeList = useSelector((state) => state.jokeStatistics.jokeList);
    const count = useSelector((state) => state.paginationCounter.count);
    const jokeDetails = jokeList && jokeList.find((curJoke) => curJoke.id === joke.id);
    const likes = jokeDetails ? (jokeDetails?.likes) :0 ;
    const dislikes = jokeDetails ? (jokeDetails?.dislikes) : 0 ;
    const handleLike =()=>{
      dispatch(likeJoke(joke));
    }

    const handleDislike = () =>{
      dispatch(dislikeJoke(joke));
    }

    const handlePrevious = ()=>{
      if(count > 0){
        dispatch(previousCount());
      }else{
        dispatch(resetCount())
      }
    }

    const handleNext = ()=>{
      if(count <  filteredJokes.length - 1){
        dispatch(nextCount());
      }else{
        dispatch(resetCount())
      }
    }
  return (
    <div className="joke-footer">
      <div className="joke-icon__container">
        <div className="upVote">
          <div className="upVoteIcon" onClick={handleLike}>
            <img src={upVoteIcon} alt="Vote Down" />
          </div>
          <span>{likes}</span>
        </div>
        <div className="downVote">
          <div className="downVoteIcon" onClick={handleDislike}>
            <img src={downVoteIcon} alt="Vote Up" />
          </div>
          <span>{dislikes}</span>
        </div>
      </div>
      <div className="joke-footer__button">
            <Button2 label={"PREV JOKE"} icon={prevIcon} color={"#cfb995"} bg={"#ffffff"}  onClick={handlePrevious}/>
            <Button3 label={"NEXT JOKE"} icon={nextIcon} color={"#cfb995"} bg={"#ffffff"} onClick={handleNext}/>
      </div>
    </div>
  );
};

export default JokeFooter;
