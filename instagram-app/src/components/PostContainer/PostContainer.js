import React from "react";
import PropTypes from "prop-types";
import PostBody from "./PostBody";
import PostComments from "../CommentSection/PostComments";

const PostContainer = ({
  post,
  handleSubmitComment,
  handleDeleteComment,
  handleLikePost
}) => {
  const dispStyle = !post.display ? "none" : "block";
  return (
    <div className="post" style={{ display: dispStyle }}>
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
    </div>
  );
};
PostContainer.propTypes = {};

export default PostContainer;
