import React from "react";
import "./index.css";
import {useSelector} from "react-redux";
import ProfileDetails from "./profileDetails";

const ProfileComponent = () => {
  const profile = useSelector(state => state.profile);
  return(
      <>
        <ProfileDetails key={profile._id} profile={profile[0]}/>
      </>
  );
};
export default ProfileComponent;