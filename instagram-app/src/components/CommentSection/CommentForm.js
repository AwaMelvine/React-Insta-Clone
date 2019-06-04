import React from "react";
import PropTypes from "prop-types";

const CommentForm = ({
  addNewComment,
  commentText,
  handleCommentChange,
  postId
}) => {
  return (
    <div className="comment-form">
      <form
        method="post"
        onSubmit={event => addNewComment(event, postId, commentText)}
      >
        <input
          type="text"
          placeholder="Add a comment..."
          value={commentText}
          onChange={event => handleCommentChange(event)}
        />
        <button type="submit">...</button>
      </form>
    </div>
  );
};

CommentForm.propTypes = {};

export default CommentForm;
