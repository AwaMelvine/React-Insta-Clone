import React from "react";
import PropTypes from "prop-types";
import { FiInstagram } from "react-icons/fi";

const propTypes = {
  text: PropTypes.string.isRequired
};

const Logo = ({ text }) => (
  <div className="logo">
    <FiInstagram />
    <span />
    <h1>{text}</h1>
  </div>
);

Logo.propTypes = propTypes;

export default Logo;
