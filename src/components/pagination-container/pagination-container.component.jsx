import "./pagination-container.styles.scss";
import Button from "../button/button.component";
import moreIcon from "../../assets/01/path-copy-7.png";
import lessIcon from "../../assets/01/path-copy-8.png";
import { loadMore, loadPrevious } from "../../features/pagination-slice";
import {useDispatch } from 'react-redux'


const PaginationContainer = ({ start, end}) => {
    const dispatch = useDispatch();
  return (
    <div className="pagination">
      {start > 0 ? (
        <Button
          label={"View Previous"}
          icon={lessIcon}
          color={"#0a0a0b"}
          bg={"#ffffff"}
          onClick ={()=> dispatch(loadPrevious())}
        />
      ) : (
        <p></p>
      )}
      {end <  1400 ? (
        <Button
          label={"View More"}
          icon={moreIcon}
          color={"#0a0a0b"}
          bg={"#ffffff"}
          labelFirst ={true}
          onClick={()=>dispatch(loadMore())}
        />
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default PaginationContainer;
