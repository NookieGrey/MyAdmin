import "./users.less";

import React from "react";

import {Redirect, Route, Switch} from "react-router-dom";

import {UsersList} from "./UsersList";
import {UsersView} from "./UsersView";
import {UsersEdit} from "./UsersEdit";

import * as routes from "../../../constants/routes";

export default function UserRoutes(props) {
  if (props.match.isExact) return <Redirect to={props.match.path + routes.LIST_ROUTE}/>
  
  return (
    <Switch>
      <Route path={props.match.path + routes.LIST_ROUTE} component={UsersList} exact/>
      <Route path={props.match.path + routes.VIEW_ROUTE + routes.ID_ROUTE} component={UsersView} exact/>
      <Route path={props.match.path + routes.EDIT_ROUTE + routes.ID_ROUTE} component={UsersEdit} exact/>
      <Redirect to={routes.ROUTE_404}/>
    </Switch>
  );
}
