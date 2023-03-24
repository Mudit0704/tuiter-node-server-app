import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faX} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";
import {updateProfile} from "../reducers/profile-reducer";
import {Link} from "react-router-dom";

const EditProfileForm = (
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

  const dispatch = useDispatch();

  const [name, setName] = useState(profile.firstName + " " + profile.lastName)
  const nameChangeHandler = (event) => {
    const nameValue = event.target.value;
    setName(nameValue);
  }

  const [bio, setBio] = useState(profile.bio)
  const bioChangeHandler = (event) => {
    const bioValue = event.target.value;
    setBio(bioValue);
  }

  const [location, setLocation] = useState(profile.location)
  const locationChangeHandler = (event) => {
    const locationValue = event.target.value;
    setLocation(locationValue);
  }

  const [website, setWebsite] = useState(profile.website)
  const websiteChangeHandler = (event) => {
    const websiteValue = event.target.value;
    setWebsite(websiteValue);
  }

  const [dateOfBirth, setDateOfBirth] = useState(profile.dateOfBirth)
  const dateOfBirthChangeHandler = (event) => {
    const dateOfBirthValue = event.target.value;
    setDateOfBirth(dateOfBirthValue);
  }

  const updateProfileDetails = (profile) => {
    const nameSeparated = name.split(" ");
    const newProfile = {
      ...profile,
      location: location,
      website: website,
      dateOfBirth: dateOfBirth,
      bio: bio,
      firstName: nameSeparated[0],
      lastName: nameSeparated[1]
    };

    dispatch(updateProfile(newProfile));
  }

  return (
      <>
        <div className="row">
          <div className="col-1">
            <Link className="btn bg-transparent border-0 ms-2" to="/tuiter/profile"><FontAwesomeIcon icon={faX}/></Link>
          </div>
          <div className="col-9 ps-0">
            <h3>Edit Profile</h3>
          </div>
          <div className="col-2">
            <Link className="btn btn-dark rounded-pill border-dark float-end fw-bold"
               onClick={() => updateProfileDetails(profile)}
               to="/tuiter/profile">Save</Link>
          </div>
        </div>
        <div className="row">
          <img src={`/images/${profile.bannerPicture}`} alt="profile-banner"/>
        </div>
        <div className="row">
          <div className="col-3">
            <img className="wd-profile-image bg-white ms-4" src={`/images/${profile.profilePicture}`}/>
          </div>
        </div>
        <form className="mt-3">
          <div className="border-1 row mb-4">
            <label htmlFor="Name">Name</label>
            <input id="Name" type="text" placeholder="Name"
                   className="form-control"
                   onChange={nameChangeHandler}
                   value={name}
            />
          </div>
          <div className="row mb-4">
            <label htmlFor="Bio">Bio</label>
            <textarea id="Bio" className="form-control"
                      placeholder="Bio"
                      value={bio}
                      onChange={bioChangeHandler}
            ></textarea>
          </div>
          <div className="row mb-4">
            <label htmlFor="Location">Location</label>
            <input id="Location" type="text"
                   placeholder="Location"
                   className="form-control"
                   value={location}
                   onChange={locationChangeHandler}
            />
          </div>
          <div className="row mb-4">
            <label htmlFor="Website">Website</label>
            <input id="Website" type="text"
                   placeholder="Website"
                   className="form-control"
                   value={website}
                   onChange={websiteChangeHandler}
            />
          </div>
          <div className="row mb-4">
            <label htmlFor="BirthDate">Date of Birth</label>
            <input id="BirthDate" type="text"
                   placeholder="Date of Birth"
                   className="form-control"
                   value={dateOfBirth}
                   onChange={dateOfBirthChangeHandler}
            />
          </div>
        </form>
      </>
  );
}
export default EditProfileForm;