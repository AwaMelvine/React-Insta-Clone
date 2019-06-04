import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  searchText: PropTypes.string.isRequired,
  handleSearchInput: PropTypes.func.isRequired
};

const SearchInput = ({ searchText, handleSearchInput }) => (
  <div className="search-input">
    <input
      type="text"
      placeholder="Search"
      value={searchText}
      onChange={event => handleSearchInput(event)}
    />
  </div>
);

SearchInput.propTypes = propTypes;

export default SearchInput;
