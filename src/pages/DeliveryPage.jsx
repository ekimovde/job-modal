import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { actionsPay } from "redux/actions";

import { Form, Input, Select, Button } from "components";

const DeliveryPage = ({ history, setPay }) => {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      fullname: "",
      address: "",
      city: "",
      index: "",
      select: "",
    },
    validationSchema: Yup.object().shape({
      fullname: Yup.string().min(10).required("Required"),
      address: Yup.string().min(4).required("Required"),
      city: Yup.string().min(3).required("Required"),
      index: Yup.string()
        .matches(/([0-9]{6})/)
        .min(6)
        .max(6)
        .required("Required"),
      select: Yup.string().required("Required"),
    }),
    onSubmit(values) {
      console.log("Submit delivery:", values);

      setPay("pay");

      history.push("/pay");
    },
  });

  return (
    <Form title="Информация для доставки" onSubmit={formik.handleSubmit}>
      <div className="form__block">
        <label htmlFor="fullname" className="form__label">
          Получатель
        </label>

        <div className="form__input">
          <Input
            placeholder="ФИО"
            name="fullname"
            value={formik.values.fullname}
            touched={formik.touched}
            error={formik.errors}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
      </div>

      <div className="form__block">
        <label htmlFor="address" className="form__label">
          Адрес
        </label>

        <div className="form__input">
          <Input
            placeholder="Город"
            name="city"
            value={formik.values.city}
            touched={formik.touched}
            error={formik.errors}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>

        <div className="form__input">
          <Input
            placeholder="Адрес"
            name="address"
            value={formik.values.address}
            touched={formik.touched}
            error={formik.errors}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>

        <div className="form__input form__input_double">
          <Select
            name="select"
            touched={formik.touched}
            error={formik.errors}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <Input
            placeholder="Индекс"
            double={true}
            name="index"
            value={formik.values.index}
            touched={formik.touched}
            error={formik.errors}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
      </div>

      <Button title="Продолжить" />
    </Form>
  );
};

export default withRouter(connect(() => ({}), actionsPay)(DeliveryPage));
