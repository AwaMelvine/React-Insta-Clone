import React from "react";
import PropTypes from "prop-types";
import PostBody from "./PostBody";
import PostComments from "../CommentSection/PostComments";
import styled from "styled-components";

const Post = styled.div`
  width: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  border: 1px solid #ebebeb;
  margin: 2rem auto 2rem;

  ${props => (props.display ? `display: block;` : `display: none;`)};

  .user-info {
    display: flex;
    justify-content: flex-start;
    align-items: center;
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
`;

const PostContainer = ({
  post,
  handleSubmitComment,
  handleDeleteComment,
  handleLikePost
}) => {
  return (
    <Post display={post.display}>
      <PostBody
        thumbnailUrl={post.thumbnailUrl}
        thumbnailAlt={post.thumbnailAlt}
        username={post.username}
        imageUrl={post.imageUrl}
        imageAlt={post.imageAlt}
        likes={post.likes}
        handleLikePost={handleLikePost}
        postId={post.id}
      />
      <PostComments
        date={post.timestamp}
        postId={post.id}
        comments={post.comments}
        handleSubmitComment={handleSubmitComment}
        handleDeleteComment={handleDeleteComment}
      />
    </Post>
  );
};
PostContainer.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number,
    timestamp: PropTypes.string.isRequired,
    comments: PropTypes.array
  }).isRequired,
  handleSubmitComment: PropTypes.func.isRequired,
  handleDeleteComment: PropTypes.func.isRequired,
  handleLikePost: PropTypes.func.isRequired
};

export default PostContainer;
