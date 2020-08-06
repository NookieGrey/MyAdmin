import React from "react";

import {UserOutlined, LockOutlined} from '@ant-design/icons';

import {Button, Checkbox, Form, Input, Select} from "../../../widgets/formik";

import {useSignUp} from "../../auth/redux/authHooks";
import {comparePasswords} from "../comparePasswords";

export function SignUp() {
  const {loading, onSignUp} = useSignUp();
  
  return (
    <Form
      onSubmit={({login, password, gender}) => onSignUp({login, password, gender})}
      initialValues={{
        login: "",
        password: "",
        confirmPassword: "",
        gender: "",
        terms: false,
      }}
      validate={comparePasswords}
    >
      <h1 className="title">Create an account</h1>
      <Input
        name='login'
        validate={["required", "email"]}
        prefix={<UserOutlined/>}
        placeholder="email"
      />
      <Select
        name='gender'
        options={[
          {value: 0, text: "Female"},
          {value: 1, text: "Male"},
          {value: 2, text: "Custom"},
        ]}
        placeholder="Select a gender"
      />
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
      <Checkbox
        name="terms"
        validate="required"
      >
        Accept terms and conditions
      </Checkbox>
      <div className="submit-button-wrapper">
        <Button
          htmlType="submit"
          loading={loading}
        >
          Sign Up
        </Button>
      </div>
    </Form>
  );
}