import React, { Component } from "react";
import PropTypes from "prop-types";

const propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

const SearchBarContainer = ({ src, alt, text }) => (
  <div className="search-bar-container">
    <Logo />
    <SearchInput />
    <UserNavItems />
  </div>
);

SearchBarContainer.propTypes = propTypes;

export default SearchBarContainer;
