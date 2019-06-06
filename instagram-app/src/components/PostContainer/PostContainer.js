import React from "react";
import PropTypes from "prop-types";
import PostBody from "./PostBody";
import PostComments from "../CommentSection/PostComments";
import styled from "styled-components";

const Post = styled.div`
  display: ${props => props.display};
`;

const PostContainer = ({
  post,
  handleSubmitComment,
  handleDeleteComment,
  handleLikePost
}) => {
  return (
    <Post display={!post.display ? "none" : "block"}>
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
