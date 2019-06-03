import React from "react";
import PropTypes from "prop-types";

function CommentForm({
  commentText,
  handleCommentChange,
  handleSubmitComment
}) {
  return (
    <div className="comment-form">
      <form method="post" onSubmit={event => handleSubmitComment(event)}>
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
}

CommentForm.propTypes = {};

export default CommentForm;
