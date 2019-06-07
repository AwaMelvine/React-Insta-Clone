import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const propTypes = {
  handleSearchInput: PropTypes.func.isRequired
};

const Search = styled.div`
  width: 350px;

  input {
    width: 60%;
    text-align: center;
    padding: 0.5rem;
    border: 1px solid #999999;
    border-radius: 5px;
    outline: none;
  }
`;

const SearchInput = ({ handleSearchInput }) => (
  <Search>
    <input
      type="text"
      placeholder="Search"
      onChange={event => handleSearchInput(event)}
    />
  </Search>
);

SearchInput.propTypes = propTypes;

export default SearchInput;
