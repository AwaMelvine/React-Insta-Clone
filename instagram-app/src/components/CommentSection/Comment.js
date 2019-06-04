import React from "react";
import PropTypes from "prop-types";

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

Comment.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.shape({
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired
};

export default Comment;
