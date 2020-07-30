import "./public-layout.less";

import React from "react";

export function PublicLayout(props) {

  return (
    <div className="public-layout">
      <div className="public-layout-inner">
        {props.children}
      </div>
    </div>
  )
}