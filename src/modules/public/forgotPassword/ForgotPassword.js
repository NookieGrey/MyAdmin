import "./forgot-password.less";

import React from 'react';

import {UserOutlined} from '@ant-design/icons';

import {Button, Form, Input} from "../../../widgets/formik";

import {PublicLayout} from "../../../widgets/layout/public/PublicLayout";

import {useForgotPassword} from "../../auth/redux/authHooks";

export function ForgotPassword() {
  const {onForgotPassword, loading} = useForgotPassword();

  return (
    <PublicLayout>
      <Form
        initialValues={{
          login: ""
        }}
        onSubmit={onForgotPassword}
      >
        <h1 className="title forgot-password-title">Forgot your Password?</h1>
        <div className="text">
          Don't worry. Just fill in your email and we'll send you a link to reset your password
        </div>
        <Input
          name='login'
          validate={["required", "email"]}
          prefix={<UserOutlined/>}
          placeholder="email"
        />
        <div className="submit-button-wrapper">
          <Button
            htmlType="submit"
            loading={loading}
          >
            Send
          </Button>
        </div>
      </Form>
    </PublicLayout>
  );
}