import React from "react";
import uuidv1 from "uuid/v1";
import Comment from "./Comment";

const PostComments = ({ comments, date }) => (
  <div className="post-comments">
    {comments.map(comment => (
      <Comment key={uuidv1()} comment={comment} />
    ))}
    <p className="date">{date}</p>
  </div>
);

export default PostComments;
