import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import "./Select.scss";

const Select = ({ name, touched, error, onChange, onBlur }) => {
  return (
    <div className="select">
      <i className="bx bx-chevron-down select__icon"></i>

      <select
        name={name}
        className={classNames("select__block", {
          select__block_error: touched[name] && error[name],
        })}
        onChange={onChange}
        onBlur={onBlur}
      >
        <option value="" className="select__option" defaultValue>
          Страна
        </option>
        <option value="Росиия" className="select__option">
          Росиия
        </option>
        <option value="Германия" className="select__option">
          Германия
        </option>
        <option value="США" className="select__option">
          США
        </option>
      </select>
    </div>
  );
};

Select.propTypes = {
  name: PropTypes.string,
  touched: PropTypes.object.isRequired,
  error: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};

export default Select;
