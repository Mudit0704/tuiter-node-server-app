import React from "react";
import TuitStats from "./TuitStats";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitItem = ({
  post = {
    "_id": 123,
    "topic": "Space",
    "userName": "SpaceX",
    "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
    "time": "2h",
    "image": "tesla.png",
    "liked": true,
    "replies": 123,
    "retuits": 432,
    "likes": 2345,
    "handle": "@spacex",
    "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
  }
}) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  }

  return(
      <>
        <li className="list-group-item border-0 bg-transparent p-0 mt-2">
          <div className="row align-top">
            <div className="col-1">
              <img src= {`/images/${post.image}`} className="rounded-5 wd-avatar-icon" alt="..."/>
            </div>
            <div className="col-8">
          <span className="fw-bold">{post.userName}
            <i className="fas fa-check-circle"></i></span>
              <span className="wd-post-details"> {post.handle} - {post.time}<br/></span>
              <span className="text-wrap d-sm-inline-block">{post.tuit}</span>
            </div>
            <div className="col-3 p-0">
              <button type="button" className="btn float-end"
                      onClick={() => deleteTuitHandler(post._id)}>
                <i className="bi bi-x-lg float-end"></i></button>
            </div>
          </div>
          <TuitStats post={post}/>
        </li>
      </>
  );
}
export default TuitItem;