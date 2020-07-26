import React from 'react';

import {Input as AntdInput} from "formik-antd";
import {Form as AntdForm} from "formik-antd";

import {validate} from "../../utils/validate";
import {isPC} from "../../utils/screenSize";

export function Input(props) {
  let InputComponent = AntdInput;
  if (props.type === "password") InputComponent = AntdInput.Password;
  if (props.type === "textarea") InputComponent = AntdInput.TextArea;

  return (
    <AntdForm.Item
      name={props.name}
      showValidateSuccess={true}
      validate={validate(props.validate)}
    >
      <InputComponent
        size={!isPC() && "large"}
        name={props.name}
        prefix={props.prefix}
        placeholder={props.placeholder}
        type={props.type}
      />
    </AntdForm.Item>
  );
}