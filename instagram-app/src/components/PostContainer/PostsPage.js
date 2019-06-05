import React from "react";
import SearchBarContainer from "../SearchBar/SearchBarContainer";
import PostList from "./PostList";

const PostsPage = ({
  posts,
  handleSearchInput,
  handleSubmitComment,
  handleDeleteComment,
  handleLikePost
}) => {
  return (
    <div className="App">
      <SearchBarContainer
        text="Instagram"
        handleSearchInput={handleSearchInput}
      />
      <PostList
        posts={posts}
        handleSubmitComment={handleSubmitComment}
        handleDeleteComment={handleDeleteComment}
        handleLikePost={handleLikePost}
      />
    </div>
  );
};

export default PostsPage;
