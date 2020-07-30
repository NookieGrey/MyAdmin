import "./sign-in.less";

import React from "react";

import {UserOutlined, LockOutlined} from '@ant-design/icons';

import {PublicLayout} from "../../../widgets/layout/public/PublicLayout";
import {Button, Form, Input} from "../../../widgets/formik";

import {useSignIn} from "../../auth/redux/authHooks";

import * as routes from "../../../constants/routes";

export function SignIn() {
  const {onSignIn} = useSignIn();

  return (
    <PublicLayout>
      <Form
        onSubmit={onSignIn}
        initialValues={{login: "", password: ""}}
        className="sign-in-form"
      >
        <h1 className="title">Welcome to MyAdmin</h1>
        <Input
          name='login'
          validate={["required", "email"]}
          prefix={<UserOutlined/>}
          placeholder="email"
        />
        <Input
          name='password'
          validate="required"
          prefix={<LockOutlined/>}
          placeholder="password"
          type="password"
        />
        <div className="links-wrapper">
          <Button
            to={routes.SIGN_UP_ROUTE}
            type="link"
            className="sign-up-btn"
          >
            Don't have an account?
          </Button>
          <Button
            to={routes.FORGOT_PASSWORD_ROUTE}
            type="link" className="forgot-btn"
          >
            Trouble signing in?
          </Button>
        </div>
        <div className="submit-button-wrapper">
          <Button
            htmlType="submit"
          >
            Sign In
          </Button>
        </div>
      </Form>
    </PublicLayout>
  );
}
