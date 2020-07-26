import React from "react";

import {Route, Switch, Redirect} from "react-router-dom";

import {PublicModule} from "./public/PublicModule";
// import {AdminModule} from "./admin/AdminModule";

import * as routes from "../constants/routes";

export function AllRoutes() {
  return (
    <Switch>
      <Route
        path={routes.PUBLIC_ROUTES}
        component={PublicModule}
      />
      <Route
        exact
        path={routes.ABOUT_ROUTE}
        component={() => "about route"}
      />
      <Route
        exact
        path={routes.ROUTE_404}
        component={() => "attempt to access a wrong or restricted route"}
      />
      <Route
        exact
        path={routes.ROUTE_500}
        component={() => "internal app error"}
      />
      <Redirect to={routes.ROUTE_404}/>
    </Switch>
  );
}
