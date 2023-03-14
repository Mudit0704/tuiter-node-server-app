import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendar} from "@fortawesome/free-regular-svg-icons";
import {faCakeCandles, faLocationDot, faLongArrowLeft} from "@fortawesome/free-solid-svg-icons";

const ProfileDetails = (
    {
        profile = {
          "firstName": "Jose",
          "lastName": "Annunziato",
          "handle": "@jannunzi",
          "profilePicture": "img.png",
          "bannerPicture": "polyglot.png",
          "bio": "Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.",
          "website": "youtube.com/webdevtv",
          "location": "Boston, MA",
          "dateOfBirth": "7/7/1968",
          "dateJoined": "4/2009",
          "followingCount": 340,
          "followersCount": 223
        }
    }
) => {
  return (
      <>
        <div className="row">
          <div className="col-1">
            <button className="bg-transparent border-0 ms-2 mt-1"><FontAwesomeIcon icon={faLongArrowLeft}/></button>
          </div>
          <div className="col-11 ps-0">
            <h3>{profile.firstName + " " + profile.lastName} </h3>
          </div>
        </div>
        <div className="row">
          <img src={`/images/${profile.bannerPicture}`} alt="profile-banner"/>
        </div>
        <div className="row">
          <div className="col-3">
            <img className="wd-profile-image bg-white ms-4" src={`/images/${profile.profilePicture}`}/>
          </div>
          <div className="col-9">
            <button className="btn btn-outline-light rounded-pill border-dark
            text-dark float-end mt-3 fw-bold">Edit Profile</button>
          </div>
        </div>
        <div className="row mt-4">
          <h3 className="fw-bold mb-0">{profile.firstName + " " + profile.lastName} </h3>
          <span className="wd-profile-handle">{profile.handle}</span>
        </div>
        <div className="row mt-3">
          <p>{profile.bio}</p>
        </div>
        <div className="row">
          <span className="col-4">
         <button className="wd-post-buttons"><FontAwesomeIcon icon={faLocationDot}/>
         <span className="ms-2">{profile.location}</span></button>
         </span>
              <span className="col-4">
         <button className="wd-post-buttons"><FontAwesomeIcon icon={faCakeCandles}/>
           <span> Born</span>
         <span className="ms-2">{profile.dateOfBirth}</span></button>
         </span>
              <span className="col-4">
         <button className="wd-post-buttons">
           <FontAwesomeIcon icon={faCalendar}/>
           <span> Joined</span>
           <span className="ms-2">{profile.dateJoined}</span></button>
         </span>
        </div>
        <div className="row mt-2">
          <span>
            <span className="fw-bold">{profile.followingCount}</span> Following
            <span className="fw-bold ms-4">{profile.followersCount}</span> Followers</span>
        </div>
      </>
  );
}
export default ProfileDetails;