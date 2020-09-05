import {useState} from "react";

import {Modal} from "antd";

import {useAsync, useAsyncCallback} from "react-async-hook";
import {useDispatch} from "react-redux";
import {push} from "connected-react-router";

import {getListApi, getItemApi, saveItemApi, deleteItemApi} from "../../../api/userApi";

import * as routes from "../../../constants/routes";

export function useList() {
  const [data, setData] = useState({
    totalCount: 0,
    list: [],
    current: 1,
  });
  
  async function getList(page) {
    const response = await getListApi(page);
    
    setData({
      ...response,
      current: page || 1, // eslint-disable-line
    });
  }
  
  const {loading: loadingInit, error: errorInit} = useAsync(getList, []);
  
  const {execute: onUpdateList, loading: loadingCallback, error: errorCallback} = useAsyncCallback(getList);
  
  return {
    ...data,
    loading: loadingInit || loadingCallback,
    error: errorInit || errorCallback,
    onUpdateList,
  };
}

export function useGetItem(id) {
  const [item, setItem] = useState({
    name: "",
    role: null,
  });
  
  async function callback() {
    if (!id) return;
    
    const response = await getItemApi(id);
    
    setItem(response);
  }
  
  const {loading, error} = useAsync(callback, [id]);
  
  return {item, loading, error};
}

export function useSaveItem() {
  const dispatch = useDispatch();
  
  async function callback(payload) {
    await saveItemApi(payload);
  
    dispatch(push(routes.ADMIN_ROUTE + routes.EMPLOYEE_ROUTE + routes.LIST_ROUTE));
  }
  
  return useAsyncCallback(callback);
}

export function useDeleteItem(updateList) {
  async function callback(id) {
    await deleteItemApi(id);
    
    await updateList();
  }
  
  const {execute, loading, error} = useAsyncCallback(callback);
  
  function onDelete(id) {
    Modal.confirm({
      content: `Are you sure to delete this item?`,
      onOk: () => execute(id),
      okType: "danger",
      okText: "Delete",
      maskClosable: true,
    })
  }
  
  return {onDelete, loading, error};
}
