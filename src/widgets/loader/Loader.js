import React from "react";

import { Spin } from "antd";

import { combineClassName } from "../../utils/utils";

import "./loader.less";

export function Loader(props) {
  return (
    <div className={combineClassName("loader-wrapper", props.className)}>
      <Spin size="large" />
    </div>
  );
}
