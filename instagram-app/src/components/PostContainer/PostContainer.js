import React from "react";
import PropTypes from "prop-types";
import PostBody from "./PostBody";
import PostComments from "./PostComments";

const PostContainer = ({
  post,
  handleSubmitComment
}) => (
  <div className="post">
    <PostBody
      thumbnailUrl={post.thumbnailUrl}
      thumbnailAlt={post.thumbnailAlt}
      username={post.username}
      imageUrl={post.imageUrl}
      imageAlt={post.imageAlt}
      likes={post.likes}
    />
    <PostComments
      date={post.timestamp}
      postId={post.id}
      comments={post.comments}
      handleSubmitComment={handleSubmitComment}
    />
  </div>
);

PostContainer.propTypes = {};

export default PostContainer;
