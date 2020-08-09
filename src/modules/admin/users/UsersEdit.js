import React from 'react';

import {Loader} from "../../../widgets/loader/Loader";
import {Button, Form, Input, Select} from "../../../widgets/formik";

import {useGetItem, useSaveItem} from "./redux/usersHooks";

import * as routes from "../../../constants/routes";

export function UsersEdit(props) {
  const id = +props.match.params.id;
  const {item, loading} = useGetItem(id);
  
  const {onSave, loading: loadingSave} = useSaveItem();
  
  if (loading) return <Loader/>;
  
  return (
    <div className="user-edit-page">
      <div className="buttons">
        <Button to={routes.ADMIN_ROUTE + routes.EMPLOYEE_ROUTE + routes.LIST_ROUTE}>
          List
        </Button>
        <ViewButton id={id}/>
      </div>
      <div className="body">
        <Form
          onSubmit={({name, role}) => onSave({name, role, id})}
          initialValues={item}
        >
          <Input
            name='name'
            placeholder="name"
          />
          <Select
            name='role'
            options={[
              {value: "admin", text: "admin"},
              {value: "operator", text: "operator"},
              {value: "manager", text: "manager"},
              {value: "user", text: "user"},
            ]}
            placeholder="Select a role"
            validate="required"
          />
          <div className="submit-button-wrapper">
            <Button
              htmlType="submit"
              loading={loadingSave}
            >
              Save
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

function ViewButton(props) {
  if (!props.id) return <div/>;
  
  return (
    <Button to={routes.ADMIN_ROUTE + routes.EMPLOYEE_ROUTE + routes.VIEW_ROUTE + "/" + props.id}>
      View
    </Button>
  )
}