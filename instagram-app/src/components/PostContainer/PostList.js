import React from "react";
import PropTypes from "prop-types";
import PostContainer from "./PostContainer";
import styled from "styled-components";

const Posts = styled.div`
  width: 46%;
  margin: 2rem auto;

  .date {
    color: #c1c1c1;
  }

  .comment-form {
    border-top: 1px solid #e0e0e0;

    form {
      margin-top: 0.8rem;
      width: 100%;
      position: relative;

      input {
        height: 100%;
        width: 100%;
        display: block;
        padding: 0.7rem 0rem;
        outline: none;
        font-size: 1.1rem;
        display: block;
        border: none;
      }
      button {
        position: absolute;
        right: 0rem;
        top: 0rem;
        border: none;
        line-height: 1rem;
        color: #444;
        font-size: 3rem;
      }
    }
  }
`;

function PostList({
  posts,
  handleSubmitComment,
  handleDeleteComment,
  handleLikePost
}) {
  return (
    <Posts>
      {posts.map(post => (
        <PostContainer
          key={post.id}
          post={post}
          handleSubmitComment={handleSubmitComment}
          handleDeleteComment={handleDeleteComment}
          handleLikePost={handleLikePost}
        />
      ))}
    </Posts>
  );
}

PostList.propTypes = {
  posts: PropTypes.array
};

export default PostList;
