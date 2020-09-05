import React from "react";

import {Redirect, Route, Switch} from "react-router-dom";

import SimpleAdminPage from "../../widgets/layout/admin/SimpleAdminPage";
import {AdminLayout} from "../../widgets/layout/admin/AdminLayout";

import * as routes from "../../constants/routes";

const Dashboard = React.lazy(() => import('./dashboard/Dashboard'));
const UsersRoutes = React.lazy(() => import('./users/UsersRoutes'));

export default function AdminRoutes(props) {
  if (props.match.isExact) return <Redirect to={props.match.path + routes.DASHBOARD_ROUTE}/>

  return (
    <AdminLayout>
      <Switch>
        <Route path={props.match.path + routes.DASHBOARD_ROUTE} component={Dashboard} exact/>
        <Route path={props.match.path + routes.EMPLOYEE_ROUTE} component={UsersRoutes}/>
        <Route path={props.match.path + routes.PERMISSION_ROUTE} component={SimpleAdminPage} exact/>
        <Route path={props.match.path + routes.GOODS_ROUTE} component={SimpleAdminPage} exact/>
        <Route path={props.match.path + routes.PRICE_ROUTE} component={SimpleAdminPage} exact/>
        <Route path={props.match.path + routes.CALLS_ROUTE} component={SimpleAdminPage} exact/>
        <Redirect to={routes.ROUTE_404}/>
      </Switch>
    </AdminLayout>
  );
}
