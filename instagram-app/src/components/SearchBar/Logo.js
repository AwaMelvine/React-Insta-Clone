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

const Logo = ({ text }) => (
  <div className="logo">
    <div className="logo-img">
      <FiInstagram size={"1.6rem"} />
    </div>

    <span />
    <LogoHeader>{text}</LogoHeader>
  </div>
);

Logo.propTypes = propTypes;

export default Logo;
