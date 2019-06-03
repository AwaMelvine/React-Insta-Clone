import React, { Component } from "react";
import PropTypes from "prop-types";
import Logo from "./Logo";

const propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

const SearchBarContainer = ({ src, alt, text }) => (
  <div className="search-bar-container">
    <Logo src={src} alt={alt} text={text} />
    <SearchInput />
    <UserNavItems />
  </div>
);

SearchBarContainer.propTypes = propTypes;

export default SearchBarContainer;
