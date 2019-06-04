import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  handleSearchInput: PropTypes.func.isRequired
};

const SearchInput = ({ handleSearchInput }) => (
  <div className="search-input">
    <input
      type="text"
      placeholder="Search"
      onChange={event => handleSearchInput(event)}
    />
  </div>
);

SearchInput.propTypes = propTypes;

export default SearchInput;
