import React, { Component } from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

class PostComments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: this.props.comments
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ comments: nextProps.comments });
  }

  addNewComment = (event, postId, text) => {
    event.preventDefault();
    this.props.handleSubmitComment(postId, text);
  };
  render() {
    const { date, postId } = this.props;
    const { comments } = this.state;
    return (
      <div className="post-comments">
        {comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
        <p className="date">{date}</p>
        <CommentForm postId={postId} addNewComment={this.addNewComment} />
      </div>
    );
  }
}
export default PostComments;
