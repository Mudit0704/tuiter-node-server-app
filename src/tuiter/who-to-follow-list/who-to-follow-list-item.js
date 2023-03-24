import React from "react";
import './index.css';

const WhoToFollowListItem = (
    {
        who = {userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.png'}
    }
) => {
  return(
      <li className="list-group-item">
        <div className="row align-items-center">
          <div className="col-2">
            <img src={`/images/${who.avatarIcon}`} className="rounded-5 wd-follow-img" alt="nasa"/>
          </div>
          <div className="col-7"><span className="fw-bold">{who.userName} <i
              className="fas fa-check-circle"></i></span><br/>@{who.handle}
          </div>
          <div className="col-3 p-0">
            <button type="button"
                    className="btn btn-primary rounded-pill">Follow
            </button>
          </div>
        </div>
      </li>
  );
};
export default WhoToFollowListItem;