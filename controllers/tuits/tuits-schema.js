import mongoose from 'mongoose';
const schema = mongoose.Schema({
  tuit: String,
  likes: Number,
  liked: Boolean,
  dislikes : Number,
  disliked : Boolean,
  replies : Number,
  retuits : Number,
  avatarIcon : String,
  handle : String,
  image : String,
  title : String,
  topic : String,
  time : String
}, {collection: 'tuits'});
export default schema;