import React from 'react';

import {Link as RouterLink} from "react-router-dom";
import {Button as AntdButton} from "antd";

import {isPC} from "../../utils/screenSize";

export function Button(props) {
  return (
    <Link
      to={props.to}
      className={props.linkClassName}
    >
      <AntdButton
        size={!isPC() && "large"}
        type={props.type || "primary"}
        htmlType={props.htmlType}
        className={props.className}
        loading={props.loading}
        onClick={props.onClick}
      >
        {props.children}
      </AntdButton>
    </Link>
  );
}

function Link(props) {
  if (!props.to) return props.children;
  
  return (
    <RouterLink
      className={props.className}
      to={props.to}
    >
      {props.children}
    </RouterLink>
  )
}