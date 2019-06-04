import React from "react";

const Comment = ({ postId, comment, handleDeleteComment }) => {
  return (
    <div className="comment">
      <p>
        <span>{comment.username}</span> {comment.text}
        <span
          className="delete"
          onClick={event => handleDeleteComment(postId, comment.id)}
        >
          x
        </span>
      </p>
    </div>
  );
};

export default Comment;
