import React from "react";
import PropTypes from "prop-types";
import { Username } from "../../Styles/Reusables/Username";

const Comment = ({ postId, comment, handleDeleteComment }) => {
  return (
    <div className="comment">
      <p>
        <Username fontWeight="lighter">
          {comment.username}
        </Username>{" "}
        {comment.text}
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
