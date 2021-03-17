import React from "react";
import PropTypes from "prop-types";

import "./Button.scss";

const Button = ({ title }) => {
  return (
    <button className="btn" type="submit">
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Button;
