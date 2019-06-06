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

    .user-info {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      img {
        height: 60px;
        width: 60px;
        border-radius: 50%;
        padding: 1rem;
      }

      span {
        font-weight: bold;
      }
    }

    .post-image img {
      width: 100%;
    }

    .post-comments {
      padding: 1rem;

      .comment {
        margin: 0.5rem 0rem;
        p {
          margin: 0px;
          span {
            font-weight: bold;
          }
        }
      }
    }
    .post-info {
      display: flex;
      flex-direction: column;
      padding: 1rem 1rem 0rem 1rem;

      .icons {
        display: flex;

        .heart,
        .comments {
          font-size: 2rem;
          margin-right: 0.8rem;
          color: #444;
        }
      }
    }
  }

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
