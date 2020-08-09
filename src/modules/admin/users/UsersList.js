import React from 'react';

import {Table, Pagination} from "antd";

import {Button} from "../../../widgets/formik";

import {useList, useDeleteItem} from "./redux/usersHooks";

import * as routes from "../../../constants/routes";

export function UsersList() {
  const {list, totalCount, current, loading, onUpdateList} = useList();
  const {onDelete} = useDeleteItem();
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (name, item) => (
        <Button
          type="link"
          to={routes.ADMIN_ROUTE + routes.EMPLOYEE_ROUTE + routes.VIEW_ROUTE + "/" + item.id}
        >
          {name}
        </Button>
      )
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'Actions',
      dataIndex: 'id',
      key: 'action',
      align: "right",
      render: id => (
        <div className="table-list-buttons">
          <Button
            to={routes.ADMIN_ROUTE + routes.EMPLOYEE_ROUTE + routes.EDIT_ROUTE + "/" + id}
          >
            Edit
          </Button>
          <Button
            type="danger"
            onClick={() => onDelete(id)}
          >
            Delete
          </Button>
        </div>
      )
    },
  ];
  
  return (
    <div className="table-page">
      <Button
        to={routes.ADMIN_ROUTE + routes.EMPLOYEE_ROUTE + routes.EDIT_ROUTE + "/0"}
        linkClassName="new-item"
      >
        New Employee
      </Button>
      <Table
        dataSource={list}
        columns={columns}
        loading={loading}
        rowKey="id"
        pagination={false}
        scroll={{y: "auto"}}
      />
      <Pagination
        current={current}
        total={totalCount}
        onChange={onUpdateList}
        showSizeChanger={false}
        className="table-pagination"
      />
    </div>
  );
}
