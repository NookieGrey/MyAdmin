import React, {Suspense} from "react";

import {Route, Switch, Redirect} from "react-router-dom";

import {About} from "./global/About";
import {Page404} from "./global/Page404";
import {Page500} from "./global/Page500";

import * as routes from "../constants/routes";
import {Loader} from "../widgets/loader/Loader";

const PublicRoutes = React.lazy(() => import('./public/PublicRoutes'));
const AdminRoutes = React.lazy(() => import('./admin/AdminRoutes'));

export function AllRoutes() {
  return (
    <Suspense fallback={<Loader/>}>
      <Switch>
        <Route path={routes.PUBLIC_ROUTES} component={PublicRoutes}/>
        <Route path={routes.ADMIN_ROUTE} component={AdminRoutes}/>
        <Route exact path={routes.ABOUT_ROUTE} component={About}/>
        <Route exact path={routes.ROUTE_404} component={Page404}/>
        <Route exact path={routes.ROUTE_500} component={Page500}/>
        <Redirect to={routes.ROUTE_404}/>
      </Switch>
    </Suspense>
  );
}
