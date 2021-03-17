import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import "./Input.scss";

const Input = ({
  placeholder,
  double = false,
  name,
  value,
  types = "",
  type = "text",
  touched,
  error,
  onChange,
  onBlur,
}) => {
  return (
    <input
      type={type}
      name={name}
      className={classNames("input", {
        input_double: double,
        input_error: touched[name] && error[name],
        input_small: types === "small",
      })}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  double: PropTypes.bool,
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
  types: PropTypes.string,
  type: PropTypes.string,
  touched: PropTypes.object,
  error: PropTypes.object,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

export default Input;
