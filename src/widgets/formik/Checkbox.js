import React from 'react';

import {Checkbox as AntdCheckbox} from "formik-antd";
import {Form as AntdForm} from "formik-antd";

import {validate} from "../../utils/validate";
import {isPC} from "../../utils/screenSize";

export function Checkbox(props) {
  return (
    <AntdForm.Item
      name={props.name}
      showValidateSuccess={!!props.validate}
      validate={validate(props.validate)}
    >
      <AntdCheckbox
        size={!isPC() && "large"}
        name={props.name}
      >
        {props.children}
      </AntdCheckbox>
    </AntdForm.Item>
  );
}