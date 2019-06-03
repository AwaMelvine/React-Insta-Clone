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

    this.setState({ posts });
  }

  handleSubmitComment = (event, postId, commentText) => {
    event.preventDefault();
    const { username } = this.state;

    this.setState({
      posts: this.state.posts.map(post => {
        if (post.id === postId) {
          const newComment = {
            id: uuidv1(),
            username: username,
            text: commentText
          };
          return {
            ...post,
            comments: [...post.comments, newComment]
          };
        }
        return post;
      })
    });
  };
  render() {
    const { posts, commentText } = this.state;
    return (
      <div className="App">
        <SearchBarContainer text="Instagram" />
        <PostList
          posts={posts}
          handleSubmitComment={this.handleSubmitComment}
        />
      </div>
    );
  }
}

export default App;
