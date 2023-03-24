import React from "react";
import {useSelector} from "react-redux";
import EditProfileForm from "./editProfileForm";

const EditProfileComponent = () => {
  const profile = useSelector(state => state.profile);
  return(
      <>
        <EditProfileForm key={profile._id} profile={profile[0]}/>
      </>
  );
};
export default EditProfileComponent;