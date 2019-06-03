import React from "react";
import PropTypes from "prop-types";
import PostBody from "./PostBody";
import PostComments from "./PostComments";

const PostContainer = ({ post }) => (
  <div className="post">
    <PostBody
      thumbnailUrl={post.thumbnailUrl}
      thumbnailAlt={post.thumbnailAlt}
      username={post.username}
      imageUrl={post.imageUrl}
      imageAlt={post.imageAlt}
      likes={post.likes}
    />
    <PostComments comments={post.comments} />
  </div>
);

PostContainer.propTypes = {};

export default PostContainer;
