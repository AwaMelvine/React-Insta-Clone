import React from "react";
import PropTypes from "prop-types";
import Logo from "./Logo";
import SearchInput from "./SearchInput";
import UserNavItems from "./UserNavItems";
import styled from "styled-components";

const Header = styled.div`
  height: 77px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-bottom: 1px solid #e6e6e6;
  text-align: center;

  h1 {
    display: inline;
    margin: 0px;
    padding: 0px;
  }

  .user-nav-items {
    width: 350px;
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    justify-content: center;

    .compass,
    .heart,
    .user {
      margin: 0px 1rem;
    }
  }
`;

const SearchBarContainer = ({ text, handleSearchInput }) => (
  <Header>
    <Logo text={text} />
    <SearchInput handleSearchInput={handleSearchInput} />
    <UserNavItems />
  </Header>
);

SearchBarContainer.propTypes = {
  text: PropTypes.string.isRequired
};

export default SearchBarContainer;
