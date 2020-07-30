import React from "react";

import {Route, Switch, Redirect} from "react-router-dom";

import {PublicModule} from "./public/PublicModule";
import {AdminModule} from "./admin/AdminModule";

import {About} from "./global/About";
import {Page404} from "./global/Page404";
import {Page500} from "./global/Page500";

import * as routes from "../constants/routes";

export function AllRoutes() {
  return (
    <Switch>
      <Route
        path={routes.PUBLIC_ROUTES}
        component={PublicModule}
      />
      <Route
        path={routes.ADMIN_ROUTE}
        component={AdminModule}
      />
      <Route
        exact
        path={routes.ABOUT_ROUTE}
        component={About}
      />
      <Route
        exact
        path={routes.ROUTE_404}
        component={Page404}
      />
      <Route
        exact
        path={routes.ROUTE_500}
        component={Page500}
      />
      <Redirect to={routes.ROUTE_404}/>
    </Switch>
  );
}
