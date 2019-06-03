import React from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

const PostComments = ({ comments, date, commentText }) => (
  <div className="post-comments">
    {comments.map(comment => (
      <Comment key={comment.id} comment={comment} />
    ))}
    <p className="date">{date}</p>
    <CommentForm commentText={commentText} />
  </div>
);

export default PostComments;
