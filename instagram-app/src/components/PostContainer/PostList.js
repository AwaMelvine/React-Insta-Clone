import React from "react";
import PropTypes from "prop-types";
import PostContainer from "./PostContainer";
import "./PostContainer.css";

function PostList({
  posts,
  handleSubmitComment,
  handleDeleteComment,
  handleLikePost
}) {
  return (
    <div className="post-list">
      {posts.map(post => (
        <PostContainer
          key={post.id}
          post={post}
          handleSubmitComment={handleSubmitComment}
          handleDeleteComment={handleDeleteComment}
          handleLikePost={handleLikePost}
        />
      ))}
    </div>
  );
}

PostList.propTypes = {
  posts: PropTypes.array
};

export default PostList;
