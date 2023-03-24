import { createSlice } from "@reduxjs/toolkit";
import profiles from '../data/profile.json';

const profileSlice = createSlice({
  name: 'profile',
  initialState: profiles,
  reducers: {
    updateProfile(state, action) {
      const profile = state.find((profile) =>
          profile._id === action.payload._id);
      profile.firstName = action.payload.firstName;
      profile.lastName = action.payload.lastName;
      profile.bio = action.payload.bio;
      profile.location = action.payload.location;
      profile.website = action.payload.website;
      profile.dateOfBirth = action.payload.dateOfBirth;
    }
  }
});

export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;