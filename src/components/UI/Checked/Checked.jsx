import React from "react";
import PropTypes from "prop-types";

import "./Checked.scss";

const Checked = ({ title }) => {
  return (
    <div className="checked">
      <i className="bx bx-check-circle checked__icon"></i>
      <span className="checked__title">{title}</span>
    </div>
  );
};

Checked.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Checked;
