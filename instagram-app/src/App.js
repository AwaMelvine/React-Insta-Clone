import React, { Component } from "react";
import "./App.css";
import uuidv1 from "uuid/v1";
import dummyData from "./dummy-data";
import SearchBarContainer from "./components/SearchBar/SearchBarContainer";
import PostList from "./components/PostContainer/PostList";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      username: "Awa",
      commentText: ""
    };
  }
  componentDidMount() {
    const posts = dummyData.map(post => ({
      ...post,
      id: uuidv1(),
      comments: post.comments.map(comment => ({ ...comment, id: uuidv1() }))
    }));

    this.setState({ ...this.state, posts });
  }

  handleSubmitComment = async (postId, commentText) => {
    const { username } = this.state;

    await this.setState({
      posts: this.state.posts.map(post => {
        if (post.id === postId) {
          const newComment = {
            id: uuidv1(),
            text: commentText,
            username: username
          };
          const updatedPost = {
            ...post,
            comments: [...post.comments, newComment]
          };
          return updatedPost;
        }
        return post;
      }),
      commentText: ""
    });
  };
  handleLikePost = postId => {
    this.setState({
      ...this.state,
      posts: this.state.posts.map(post => {
        if (post.id === postId) {
          return {
            ...post,
            likes: post.likes * 1 + 1
          };
        }
        return post;
      })
    });
  };
  render() {
    const { posts } = this.state;
    return (
      <div className="App">
        <SearchBarContainer text="Instagram" />
        <PostList
          posts={posts}
          handleSubmitComment={this.handleSubmitComment}
          handleLikePost={this.handleLikePost}
        />
      </div>
    );
  }
}

export default App;
