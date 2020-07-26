import React from "react";

import {Route, Switch} from "react-router-dom";

import {SignIn} from "./signIn/SignIn";

import * as routes from "../../constants/routes";

export const moduleName = "PublicRoutes";

export function PublicRoutes() {
  return (
    <Switch>
      <Route path={routes.SIGN_IN_ROUTE} component={SignIn} exact/>
    </Switch>
  );
}
