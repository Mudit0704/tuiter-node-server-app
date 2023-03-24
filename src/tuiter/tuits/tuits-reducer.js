import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';
import {updateTuitThunk, createTuitThunk, deleteTuitThunk, findTuitsThunk} from "../../services/tuits-thunks";

const currentUser = {
  "userName": "NASA",
  "handle": "@nasa",
  "avatarIcon": "nasa.png",
};

const templateTuit = {
  ...currentUser,
  "topic": "Space",
  "time": "2h",
  "liked": false,
  "replies": 0,
  "retuits": 0,
  "likes": 0,
}

const initialState = {
  tuits: [],
  loading: false
}

const tuitsSlice = createSlice({
  name: 'tuits',
  initialState,
  extraReducers: {
    [findTuitsThunk.pending]:
        (state) => {
          state.loading = true
          state.tuits = []
        },
    [findTuitsThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          state.tuits = payload
        },
    [findTuitsThunk.rejected]:
        (state, action) => {
          state.loading = false
          state.error = action.error
        },
    [deleteTuitThunk.fulfilled] :
        (state, { payload }) => {
          state.loading = false
          state.tuits = state.tuits
          .filter(t => t._id !== payload)
        },
    [createTuitThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          state.tuits.push(payload)
        },
    [updateTuitThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          const tuitNdx = state.tuits
          .findIndex((t) => t._id === payload._id)
          state.tuits[tuitNdx] = {
            ...state.tuits[tuitNdx],
            ...payload
          }
        }
  },
  reducers: {
    increaseLikeCount(state, action) {
      const post = state.tuits.find((post) =>
          post._id === action.payload._id);
      post.liked = !post.liked;
      post.likes = post.liked ? post.likes + 1 : post.likes - 1;

    },
    createTuit(state, action) {
      state.tuits.unshift({
        ...action.payload,
        ...templateTuit,
        _id: (new Date()).getTime(),
      })
    },
    deleteTuit(state, action) {
      const index = state.tuits.
      findIndex(tuit =>
          tuit._id === action.payload);
      state.tuits.splice(index, 1);
    }
  }
});

export const {increaseLikeCount, createTuit, deleteTuit} = tuitsSlice.actions
export default tuitsSlice.reducer;