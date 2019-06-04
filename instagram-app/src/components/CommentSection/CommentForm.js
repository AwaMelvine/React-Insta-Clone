import React, { Component } from "react";
import PropTypes from "prop-types";

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentText: ""
    };
  }
  handleCommentChange = event => {
    this.setState({ ...this.state, commentText: event.target.value });
  };
  render() {
    const { addNewComment, postId } = this.props;
    const { commentText } = this.state;
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
            onChange={event => this.handleCommentChange(event)}
          />
          <button type="submit">...</button>
        </form>
      </div>
    );
  }
}

CommentForm.propTypes = {};

export default CommentForm;
