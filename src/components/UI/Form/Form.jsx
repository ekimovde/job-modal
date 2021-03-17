import React from "react";
import PropTypes from "prop-types";

import { NavHistory } from "components";

import "./Form.scss";

const Form = ({ title, children, onSubmit, status = "" }) => {
  return status !== "success" ? (
    <form className="form" onSubmit={onSubmit}>
      <div className="form__top">
        <NavHistory />
      </div>

      <div className="form__offer">
        <h3 className="form__title">{title}</h3>

        {children}
      </div>
    </form>
  ) : (
    <form className="form form_status">{children}</form>
  );
};

Form.propTypes = {
  title: PropTypes.string,
  onSubmit: PropTypes.func,
  status: PropTypes.string,
};

export default Form;
