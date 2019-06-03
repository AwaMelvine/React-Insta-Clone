import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  searchText: PropTypes.string
};

const SearchInput = ({ searchText }) => (
  <div className="search-input">
    <input type="text" placeholder="Search" value={searchText} />
  </div>
);

SearchInput.propTypes = propTypes;

export default SearchInput;
