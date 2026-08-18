import mongoose from 'mongoose';
const schema = mongoose.Schema({
  tuit: {type: String, required: true},
  likes: Number,
  liked: Boolean,
  dislikes : Number,
  disliked : Boolean,
  replies : Number,
  retuits : Number,
  avatarIcon : String,
  handle : {type: String, required: true},
  image : String,
  title : String,
  topic : String,
  time : String
}, {collection: 'tuits'});
export default schema;