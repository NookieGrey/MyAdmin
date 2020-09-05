import React from "react";

import {Route, Switch} from "react-router-dom";

import {PublicLayout} from "../../widgets/layout/public/PublicLayout";
import {SignIn} from "./signIn/SignIn";
import {SignUp} from "./signUp/SignUp";
import {ForgotPassword} from "./forgotPassword/ForgotPassword";
import {EmailSent} from "./emailSent/EmailSent";
import {ResetPassword} from "./resetPassword/ResetPassword";

import * as routes from "../../constants/routes";

export default function PublicRoutes() {
  return (
    <PublicLayout>
      <Switch>
        <Route path={routes.SIGN_IN_ROUTE} component={SignIn} exact/>
        <Route path={routes.SIGN_UP_ROUTE} component={SignUp} exact/>
        <Route path={routes.FORGOT_PASSWORD_ROUTE} component={ForgotPassword} exact/>
        <Route path={routes.EMAIL_SENT_ROUTE} component={EmailSent} exact/>
        <Route path={routes.RESET_PASSWORD_ROUTE} component={ResetPassword} exact/>
      </Switch>
    </PublicLayout>
  );
}
