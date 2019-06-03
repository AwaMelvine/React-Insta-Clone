import React from "react";
import Comment from "./Comment";

const PostComments = ({ comments }) => (
  <div className="post-comments">
    {comments.map(comment => (
      <Comment key={comment.username} comment={comment} />
    ))}
  </div>
);

export default PostComments;
