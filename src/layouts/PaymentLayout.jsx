import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { DeliveryPage, PayPage, SuccessPayPage } from "pages";

const PaymentLayout = ({ status }) => {
  return (
    <Switch>
      <Route path="/" component={DeliveryPage} exact />
      {status === "pay" && <Route path="/pay" component={PayPage} exact />}
      {status === "success" && (
        <Route path="/pay/success" component={SuccessPayPage} exact />
      )}
      <Redirect to="/" />
    </Switch>
  );
};

export default connect(({ pay }) => ({
  status: pay.status,
}))(PaymentLayout);
