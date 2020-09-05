import React from "react";

import {Redirect} from "react-router-dom";

import {Loader} from "../../widgets/loader/Loader";

import {useLocation} from "react-router";

import * as routes from "../../constants/routes";
import {ADMIN_ROLE, USER_ROLE} from "../../constants/roles";
import {useRole} from "./authHooks";

export function AuthControl(props) {
  const {role, error, loading} = useRole();

  const {pathname} = useLocation();

  const rootRoute = pathname === routes.ROOT_ROUTE;
  const globalRoute = new RegExp(`^(${routes.GLOBAL_ROUTES.join("|")})$`).test(pathname);
  const publicRoute = new RegExp(`^(${routes.PUBLIC_ROUTES.join("|")})$`).test(pathname);
  const adminRoute = new RegExp(`^${routes.ADMIN_ROUTE}`).test(pathname);
  const userRoute = new RegExp(`^${routes.USER_ROUTE}`).test(pathname);

  if (error) throw error;

  if (loading) return <Loader/>;

  if (globalRoute) return props.children;

  if (!role) {
    if (adminRoute || userRoute || rootRoute) return <Redirect to={routes.SIGN_IN_ROUTE}/>;
    if (publicRoute) return props.children;

    return <Redirect to="/404"/>;
  }

  //normal flow
  if (adminRoute && role === ADMIN_ROLE) return props.children;
  if (userRoute && role === USER_ROLE) return props.children;

  if (rootRoute || publicRoute) {
    if (role === ADMIN_ROLE) return <Redirect to={routes.ADMIN_ROUTE}/>;
    if (role === USER_ROLE) return <Redirect to={routes.USER_ROUTE}/>;
  }

  // eslint-disable-next-line no-console
  console.error("attempt to access a wrong or restricted route");
  return <Redirect to="/404"/>;
}
