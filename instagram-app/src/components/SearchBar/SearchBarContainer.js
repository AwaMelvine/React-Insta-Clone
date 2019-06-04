import React from "react";
import PropTypes from "prop-types";
import Logo from "./Logo";
import SearchInput from "./SearchInput";
import UserNavItems from "./UserNavItems";
import "./SearchBar.css";

const SearchBarContainer = ({ text }) => (
  <div className="search-bar-container">
    <Logo text={text} />
    <SearchInput />
    <UserNavItems />
  </div>
);

SearchBarContainer.propTypes = {
  text: PropTypes.string.isRequired,
  searchText: PropTypes.string
};

export default SearchBarContainer;
