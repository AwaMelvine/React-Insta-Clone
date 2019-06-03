import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

const Logo = ({ src, alt, text }) => (
  <div className="logo">
    <img src={src} alt={alt} />
    <span />
    <h1>{text}</h1>
  </div>
);

Logo.propTypes = propTypes;

export default Logo;
