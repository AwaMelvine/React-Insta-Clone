import React from "react";
import PropTypes from "prop-types";
import PostContainer from "./PostContainer";

function PostList({ posts }) {
  return (
    <div className="post-list">
      {posts.map(post => (
        <PostContainer
          key={post.username}
          post={post}
        />
      ))}
    </div>
  );
}

PostList.propTypes = {
  posts: PropTypes.array
};

export default PostList;
