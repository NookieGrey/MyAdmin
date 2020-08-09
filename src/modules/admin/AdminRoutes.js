import React from "react";

import {Redirect, Route, Switch} from "react-router-dom";

import SimpleAdminPage from "../../widgets/layout/admin/SimpleAdminPage";
import {AdminLayout} from "../../widgets/layout/admin/AdminLayout";

import {DashboardModule} from "./dashboard/DashboardModule";
import {UsersModule} from "./users/UsersModule";

import * as routes from "../../constants/routes";

export const moduleName = "AdminRoutes";

export function AdminRoutes(props) {
  if (props.match.isExact) return <Redirect to={props.match.path + routes.DASHBOARD_ROUTE}/>

  return (
    <AdminLayout>
      <Switch>
        <Route path={props.match.path + routes.DASHBOARD_ROUTE} component={DashboardModule} exact/>
        <Route path={props.match.path + routes.EMPLOYEE_ROUTE} component={UsersModule}/>
        <Route path={props.match.path + routes.PERMISSION_ROUTE} component={SimpleAdminPage} exact/>
        <Route path={props.match.path + routes.GOODS_ROUTE} component={SimpleAdminPage} exact/>
        <Route path={props.match.path + routes.PRICE_ROUTE} component={SimpleAdminPage} exact/>
        <Route path={props.match.path + routes.CALLS_ROUTE} component={SimpleAdminPage} exact/>
        <Redirect to={routes.ROUTE_404}/>
      </Switch>
    </AdminLayout>
  );
}
