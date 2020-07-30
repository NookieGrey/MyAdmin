import React from 'react';

import {Select as AntdSelect} from "formik-antd";
import {Form as AntdForm} from "formik-antd";

import {validate} from "../../utils/validate";
import {isPC} from "../../utils/screenSize";

export function Select(props) {
  return (
    <AntdForm.Item
      name={props.name}
      showValidateSuccess={!!props.validate}
      validate={validate(props.validate)}
    >
      <AntdSelect
        size={!isPC() && "large"}
        name={props.name}
        prefix={props.prefix}
        placeholder={props.placeholder}
      >
        {(props.options || []).map(option => <AntdSelect.Option key={option.value} value={option.value}>{option.text}</AntdSelect.Option>)}
      </AntdSelect>
    </AntdForm.Item>
  );
}