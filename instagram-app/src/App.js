import React, { Component } from "react";
import uuidv1 from "uuid/v1";
import Fuse from "fuse.js";
import "./App.css";
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
  async componentDidMount() {
    const posts = dummyData.map(post => ({
      ...post,
      id: uuidv1(),
      display: true,
      comments: post.comments.map(comment => ({ ...comment, id: uuidv1() }))
    }));
    const postsData = localStorage.getItem("posts");
    const savedPosts = JSON.parse(postsData);

    await this.setState({
      ...this.state,
      posts: savedPosts.length > 0 ? savedPosts : posts
    });

    await localStorage.setItem("posts", JSON.stringify(this.state.posts));
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
    await localStorage.setItem("posts", JSON.stringify(this.state.posts));
  };
  handleLikePost = async postId => {
    await this.setState({
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
    await localStorage.setItem("posts", JSON.stringify(this.state.posts));
  };
  handleSearchInput = async event => {
    const options = {
      shouldSort: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: ["username"]
    };
    const fuse = new Fuse(this.state.posts, options); // "list" is the item array
    const result =
      event.target.value === ""
        ? this.state.posts
        : fuse.search(event.target.value);

    await this.setState({
      ...this.state,
      posts: this.state.posts.map(post => {
        const resultIds = result.map(res => res.id);

        if (!resultIds.includes(post.id)) {
          return {
            ...post,
            display: false
          };
        }
        return { ...post, display: true };
      })
    });
  };
  handleDeleteComment = async (postId, commentId) => {
    await this.setState({
      ...this.state,
      posts: this.state.posts.map(post => {
        if (post.id === postId) {
          return {
            ...post,
            comments: post.comments.filter(comment => comment.id !== commentId)
          };
        }
        return post;
      })
    });
    await localStorage.setItem("posts", JSON.stringify(this.state.posts));
  };
  render() {
    const { posts } = this.state;
    return (
      <div className="App">
        <SearchBarContainer
          text="Instagram"
          handleSearchInput={this.handleSearchInput}
        />
        <PostList
          posts={posts}
          handleSubmitComment={this.handleSubmitComment}
          handleDeleteComment={this.handleDeleteComment}
          handleLikePost={this.handleLikePost}
        />
      </div>
    );
  }
}

export default App;
