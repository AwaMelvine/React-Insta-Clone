import React from "react";
import PropTypes from "prop-types";
import PostContainer from "./PostContainer";
import "./PostContainer.css";

function PostList({ posts, handleSubmitComment }) {
  return (
    <div className="post-list">
      {posts.map(post => (
        <PostContainer
          key={post.id}
          post={post}
          handleSubmitComment={handleSubmitComment}
        />
      ))}
    </div>
  );
}

PostList.propTypes = {
  posts: PropTypes.array
};

export default PostList;
