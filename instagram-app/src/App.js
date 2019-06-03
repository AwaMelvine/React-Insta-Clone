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
      posts: []
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
  render() {
    const { posts } = this.state;
    return (
      <div className="App">
        <SearchBarContainer text="Instagram" />
        <PostList posts={posts} />
      </div>
    );
  }
}

export default App;
