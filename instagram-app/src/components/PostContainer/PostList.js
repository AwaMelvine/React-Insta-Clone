import React from "react";
import PropTypes from "prop-types";
import PostContainer from "./PostContainer";
import styled from "styled-components";

const Posts = styled.div`
  width: 46%;
  margin: 2rem auto;

  .post {
    width: 100%;
    background: white;
    display: flex;
    flex-direction: column;
    border: 1px solid #ebebeb;
    margin: 2rem auto 2rem;
  }
  .post .user-info {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .post .user-info img {
    height: 60px;
    width: 60px;
    border-radius: 50%;
    padding: 1rem;
  }
  .post .user-info span {
    font-weight: bold;
  }

  .post .post-image img {
    width: 100%;
  }
  .post .post-comments {
    padding: 1rem;
  }
  .post .post-info {
    display: flex;
    flex-direction: column;
    padding: 1rem 1rem 0rem 1rem;
  }

  .post .post-info .icons {
    display: flex;
  }

  .post .post-info .icons .heart,
  .post .post-info .icons .comments {
    font-size: 2rem;
    margin-right: 0.8rem;
    color: #444;
  }

  .post .post-comments .comment {
    margin: 0.5rem 0rem;
  }
  .post .post-comments .comment p {
    margin: 0px;
  }
  .post .post-comments .comment p span {
    font-weight: bold;
  }
  .date {
    color: #c1c1c1;
  }

  .comment-form {
    border-top: 1px solid #e0e0e0;
  }

  .comment-form form {
    margin-top: 0.8rem;
    width: 100%;
    position: relative;
  }
  .comment-form form input {
    height: 100%;
    width: 100%;
    display: block;
    padding: 0.7rem 0rem;
    outline: none;
    font-size: 1.1rem;
    display: block;
    border: none;
  }

  .comment-form form button {
    position: absolute;
    right: 0rem;
    top: 0rem;
    border: none;
    line-height: 1rem;
    color: #444;
    font-size: 3rem;
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
