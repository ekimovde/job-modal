import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { actionsPay } from "redux/actions";

import { Form, Input, Button } from "components";

const PayPage = ({ history, setPay }) => {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      nameCard: "",
      numberCard: "",
      date: "",
      cvv: "",
    },
    validationSchema: Yup.object().shape({
      nameCard: Yup.string().min(8).required("Required"),
      numberCard: Yup.string()
        .matches(/([0-9]{4})\s([0-9]{4})\s([0-9]{4})\s([0-9]{4})/)
        .min(19)
        .max(19)
        .required("Required"),
      date: Yup.string()
        .matches(/([0-9]{2})\/([0-9]{2})/)
        .min(5)
        .max(5)
        .required("Required"),
      cvv: Yup.string()
        .matches(/([0-9]{2})/)
        .min(3)
        .max(3)
        .required("Required"),
    }),
    onSubmit(values) {
      console.log("Submit pay:", values);

      setPay("success");
      history.push("/pay/success");
    },
  });

  return (
    <Form title="Оплата" onSubmit={formik.handleSubmit}>
      <div className="form__block">
        <label htmlFor="nameCard" className="form__label">
          Имя на карте
        </label>

        <div className="form__input">
          <Input
            placeholder="Имя на карте"
            name="nameCard"
            value={formik.values.nameCard}
            touched={formik.touched}
            error={formik.errors}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
      </div>

      <div className="form__block">
        <label htmlFor="numberCard" className="form__label">
          Номер карты
        </label>

        <div className="form__input">
          <Input
            placeholder="XXXX XXXX XXXX XXXX"
            name="numberCard"
            value={formik.values.numberCard}
            touched={formik.touched}
            error={formik.errors}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
      </div>

      <div className="form__block">
        <div className="form__input form__input_double-small">
          <div className="form__double-block">
            <label htmlFor="date" className="form__label">
              Срок
            </label>

            <div className="form__input">
              <Input
                placeholder="MM/YY"
                double={true}
                types="small"
                name="date"
                value={formik.values.date}
                touched={formik.touched}
                error={formik.errors}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
          </div>

          <div className="form__double-block">
            <label htmlFor="cvv" className="form__label">
              CW
            </label>

            <div className="form__input">
              <Input
                placeholder=""
                double={true}
                name="cvv"
                types="small"
                type="password"
                value={formik.values.cvv}
                touched={formik.touched}
                error={formik.errors}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
          </div>
        </div>
      </div>

      <Button title="Оплатить" />
    </Form>
  );
};

export default withRouter(connect(() => ({}), actionsPay)(PayPage));
