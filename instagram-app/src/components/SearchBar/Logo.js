import React from "react";
import PropTypes from "prop-types";
import { FiInstagram } from "react-icons/fi";
import styled from "styled-components";

const propTypes = {
  text: PropTypes.string.isRequired
};

const LogoHeader = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Oleo+Script&display=swap");

  display: inline;
  margin: 0px;
  padding: 0px;
  font-family: "Oleo Script", cursive;
  font-size: 2rem;
`;
const LogoWrapper = styled.div`
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
`;

const Logo = ({ text }) => (
  <LogoWrapper>
    <FiInstagram size={"1.6rem"} />
    <span />
    <LogoHeader>{text}</LogoHeader>
  </LogoWrapper>
);

Logo.propTypes = propTypes;

export default Logo;
