import React from 'react';

import {Formik} from "formik";

import {Form as AntdForm} from "formik-antd";

export function Form(props) {
  return (
    <Formik
      onSubmit={props.onSubmit}
      initialValues={props.initialValues}
    >
      <AntdForm className={props.className}>
        {props.children}
      </AntdForm>
    </Formik>
  );
}