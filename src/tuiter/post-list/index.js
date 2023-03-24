import PostItem from "./post-item";
import postsArray from './posts.json';
import React from "react";

const PostList = () => {
  return(
      <ul className="list-group">
        {
          postsArray.map(post =>
              <PostItem
                  key={post._id} post={post}/> )
        }
      </ul>
  );
}

export default PostList;