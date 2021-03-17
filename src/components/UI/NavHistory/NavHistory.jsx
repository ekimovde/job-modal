import React from "react";
import { withRouter } from "react-router-dom";
import classNames from "classnames";
import { connect } from "react-redux";

import { actionsPay } from "redux/actions";

import "./NavHistory.scss";

const NavHistory = ({ location, history, status, setPay }) => {
  const links = [
    {
      path: "/",
      title: "Доставка",
    },
    {
      path: "/pay",
      title: "Оплата",
    },
  ];

  const onClickToLink = (path) => {
    if (location.pathname === "/" && status !== "delivery") {
      history.push(path);
    } else if (location.pathname === "/pay") {
      setPay("delivery");

      history.push(path);
    }
  };

  return (
    <div className="nav-history">
      {links.map((link, index) => (
        <h5
          className={classNames("nav-history__title", {
            "nav-history__title_active": location.pathname === link.path,
          })}
          key={index}
          onClick={() => onClickToLink(link.path)}
        >
          {link.title}
        </h5>
      ))}
    </div>
  );
};

export default withRouter(
  connect(
    ({ pay }) => ({
      status: pay.status,
    }),
    actionsPay
  )(NavHistory)
);
