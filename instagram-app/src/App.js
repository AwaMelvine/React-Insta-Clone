import React, { Component } from "react";
import "./App.css";
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
    this.setState({ posts: dummyData });
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
