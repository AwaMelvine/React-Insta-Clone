import React from "react";
import PropTypes from "prop-types";
import Logo from "./Logo";
import SearchInput from "./SearchInput";
import UserNavItems from "./UserNavItems";
import "./SearchBar.css";

const SearchBarContainer = ({ text, handleSearchInput }) => (
  <div className="search-bar-container">
    <Logo text={text} />
    <SearchInput handleSearchInput={handleSearchInput} />
    <UserNavItems />
  </div>
);

SearchBarContainer.propTypes = {
  text: PropTypes.string.isRequired
};

export default SearchBarContainer;
