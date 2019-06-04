import React, { Component } from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import "./CommentSection.css";

class PostComments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: this.props.comments,
      commentText: ""
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ comments: nextProps.comments, commentText: "" });
  }

  addNewComment = (event, postId, text) => {
    event.preventDefault();
    this.props.handleSubmitComment(postId, text);
  };

  handleCommentChange = event => {
    this.setState({ ...this.state, commentText: event.target.value });
  };

  render() {
    const { date, postId } = this.props;
    const { comments, commentText } = this.state;
    return (
      <div className="post-comments">
        {comments.map(comment => (
          <Comment
            key={comment.id}
            postId={postId}
            comment={comment}
            handleDeleteComment={this.props.handleDeleteComment}
          />
        ))}
        <p className="date">{date}</p>
        <CommentForm
          postId={postId}
          commentText={commentText}
          addNewComment={this.addNewComment}
          handleCommentChange={this.handleCommentChange}
        />
      </div>
    );
  }
}
export default PostComments;
