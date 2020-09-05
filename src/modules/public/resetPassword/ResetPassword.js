import React from 'react';

import {LockOutlined} from '@ant-design/icons';

import {Button, Form, Input} from "../../../widgets/formik";
import {useResetPassword} from "../publicHooks";
import {comparePasswords} from "../comparePasswords";
import {useQuery} from "../../../utils/hooks";

export function ResetPassword() {
  const {execute, loading} = useResetPassword();
  const {token} = useQuery();
  
  return (
    <Form
      initialValues={{
        password: "",
        confirmPassword: "",
      }}
      onSubmit={(password) => execute({password, token})}
      validate={comparePasswords}
    >
      <h1 className="title forgot-password-title">Reset Password</h1>
      <Input
        name='password'
        validate="required"
        prefix={<LockOutlined/>}
        placeholder="password"
        type="password"
      />
      <Input
        name='confirmPassword'
        validate="required"
        prefix={<LockOutlined/>}
        placeholder="confirm password"
        type="password"
      />
      <div className="submit-button-wrapper">
        <Button
          htmlType="submit"
          loading={loading}
        >
          Save
        </Button>
      </div>
    </Form>
  );
}