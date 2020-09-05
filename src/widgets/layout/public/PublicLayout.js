import "./public-layout.less";

import React, {Suspense} from "react";
import {Loader} from "../../loader/Loader";

export function PublicLayout(props) {
  return (
    <div className="public-layout">
      <div className="public-layout-inner">
        <Suspense fallback={<Loader/>}>
          {props.children}
        </Suspense>
      </div>
    </div>
  )
}