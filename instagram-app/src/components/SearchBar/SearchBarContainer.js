import React from "react";
import PropTypes from "prop-types";
import Logo from "./Logo";
import SearchInput from "./SearchInput";
import UserNavItems from "./UserNavItems";
import "./SearchBar.css";
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
  .logo {
    width: 350px;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      display: block;
      height: 1.5rem;
      border-left: 1px solid gray;
      margin: 0px 1.3rem;
    }
  }

  .search-input {
    width: 350px;

    input {
      width: 60%;
      text-align: center;
      padding: 0.5rem;
      border: 1px solid #999999;
      border-radius: 5px;
      outline: none;
    }
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
