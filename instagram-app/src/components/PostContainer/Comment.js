import React from "react";

const Comment = ({ comment }) => {
  return (
    <div>
      <p>
        <span>{comment.username}</span> {comment.text}
      </p>
    </div>
  );
};

export default Comment;
