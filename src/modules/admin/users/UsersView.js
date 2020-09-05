import React from 'react';

import {Form} from "antd";

import {Loader} from "../../../widgets/loader/Loader";
import {Button} from "../../../widgets/formik";

import {useGetItem} from "./usersHooks";

import * as routes from "../../../constants/routes";

export function UsersView(props) {
  const {item, loading} = useGetItem(props.match.params.id);
  
  if (loading) return <Loader/>;
  
  return (
    <div className="user-view-page">
      <div className="buttons">
        <Button to={routes.ADMIN_ROUTE + routes.EMPLOYEE_ROUTE + routes.LIST_ROUTE}>
          List
        </Button>
        <Button to={routes.ADMIN_ROUTE + routes.EMPLOYEE_ROUTE + routes.EDIT_ROUTE + "/" + item.id}>
          Edit
        </Button>
      </div>
      <div className="body">
        <h2>{item.name}</h2>
        <Form.Item>
          role: {item.role}
        </Form.Item>
      </div>
    </div>
  );
}
