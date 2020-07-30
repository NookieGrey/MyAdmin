import React from 'react';

import {Link as RouterLink} from "react-router-dom";
import {Button as AntdButton} from "antd";

import {isPC} from "../../utils/screenSize";

export function Button(props) {
  return (
    <Link to={props.to}>
      <AntdButton
        size={!isPC() && "large"}
        type={props.type || "primary"}
        htmlType={props.htmlType}
        className={props.className}
        loading={props.loading}
      >
        {props.children}
      </AntdButton>
    </Link>
  );
}

function Link(props) {
  if (!props.to) return props.children;

  return (
    <RouterLink to={props.to}>
      {props.children}
    </RouterLink>
  )
}