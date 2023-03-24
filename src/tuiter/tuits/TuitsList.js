import TuitItem from "./TuitItem";
import {useSelector, useDispatch} from "react-redux";
import React, {useEffect} from "react";
import {findTuitsThunk} from "../../services/tuits-thunks";

const TuitList = () => {
  const {tuits, loading} = useSelector(state => state.tuitsData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findTuitsThunk())
  }, [])

  return(
      <ul className="list-group">
        {
          loading &&
            <li className="list-group-item">
              Loading...
            </li>
        }
        {
          !loading && tuits.map(post =>
              <TuitItem
                  key={post._id} post={post}/> )
        }
      </ul>
  );
}

export default TuitList;