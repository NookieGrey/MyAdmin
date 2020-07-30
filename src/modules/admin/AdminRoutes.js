import React from "react";

import {Redirect, Route, Switch} from "react-router-dom";

import * as routes from "../../constants/routes";

export const moduleName = "AdminRoutes";

export function AdminRoutes(props) {
  if (props.match.isExact) return <Redirect to={props.match.path + routes.DASHBOARD_ROUTE}/>

  return (
    <Switch>
      <Route path={props.match.path + routes.DASHBOARD_ROUTE} component={() => "dashboard"} exact/>
      <Redirect to={routes.ROUTE_404}/>
    </Switch>
  );
}
