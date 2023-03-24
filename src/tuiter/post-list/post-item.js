import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faRetweet,
  faUpload
} from "@fortawesome/free-solid-svg-icons";
import {faComment, faHeart} from "@fortawesome/free-regular-svg-icons";

const PostItem = ({
  post = {
    "avatarIcon": "insp4.png",
    "userName": "Elon Musk",
    "handle": "elonmusk",
    "time": "23h",
    "title": "Amazing show about @Inspiration4x mission!",
    "image": "insp4_content.png",
    "imageTitle": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
    "imageContent": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space ...",
    "commentCount": "4.2K",
    "retweetCount": "3.5K",
    "likeCount": "37.5K"
  }
}) => {
  return(
      <>
     <li className="list-group-item border-0 bg-transparent p-0 mt-2">
     <div className="row align-top">
        <div className="col-1">
          <img src= {`/images/${post.avatarIcon}`} className="rounded-5 wd-avatar-icon" alt="..."/>
        </div>
        <div className="col-8">
          <span className="fw-bold">{post.userName}
        <i className="fas fa-check-circle"></i></span>
        <span className="wd-post-details"> @{post.handle} - {post.time}</span>
        <span className="text-wrap d-sm-inline-block">{post.title}</span>
        </div>
        <div className="col-3 p-0">
        <button type="button" className="btn float-end">
          <FontAwesomeIcon icon={faEllipsis}/></button>
        </div>
        
      </div>
      
      <div className="card mt-2 rounded-4 bg-transparent wd-post-card">
      <img src={`/images/${post.image}`} className="card-img-top rounded-4" alt="..."/>
        {!(post.imageTitle === '' && post.imageContent === '') &&
            <div className="card-body">
          <h6 className="card-title">{post.imageTitle}</h6>
          <p className="card-text wd-post-content">{post.imageContent}</p>
        </div>}
    </div>
    <div className="row ms-5 mt-3">
    <span className="col-3">
     <a className="wd-post-buttons" href="#"><FontAwesomeIcon icon={faComment}/>
     <span className="ms-2">{post.commentCount}</span></a>
     </span>
     <span className="col-3">
     <a className="wd-post-buttons" href="#"><FontAwesomeIcon icon={faRetweet}/>
     <span className="ms-2">{post.retweetCount}</span></a>
     </span>
     <span className="col-3">
     <a className="wd-post-buttons" href="#"><FontAwesomeIcon icon={faHeart}/>
     <span className="ms-2">{post.likeCount}</span></a>
     </span>
     <span className="col-3">
     <a className="wd-post-buttons" href="#"><FontAwesomeIcon icon={faUpload}/></a>
    </span>
    </div>
    </li>
</>
 );
}
export default PostItem;