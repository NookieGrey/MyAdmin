import {Modal} from "antd";

import {useAsync, useAsyncCallback} from "react-async-hook";
import {useDispatch} from "react-redux";
import {push} from "connected-react-router";

import {useAPI, useReduxState} from "../../../../utils/hooks";
import {getListApi, getItemApi, saveItemApi, deleteItemApi} from "../../../../api/userApi";
import {usersActions} from "./usersSlice";

import * as routes from "../../../../constants/routes";

export function useList() {
  const getList = useAPI({
    method: getListApi,
    success: usersActions.getList,
  });
  
  const {loading: loadingInit, error: errorInit} = useAsync(getList, []);
  
  const {execute: onUpdateList, loading: loadingCallback, error: errorCallback} = useAsyncCallback(getList);
  
  const {list, totalCount, current} = useReduxState(state => ({
    list: state.users.list,
    totalCount: state.users.totalCount,
    current: state.users.current,
  }));
  
  return {
    list,
    totalCount,
    current,
    loading: loadingInit || loadingCallback,
    error: errorInit || errorCallback,
    onUpdateList,
  };
}

export function useGetItem(id) {
  const dispatch = useDispatch();
  
  const getItem = useAPI({
    init: usersActions.clearItem,
    method: getItemApi,
    success: usersActions.getItem,
  });
  
  const {loading, error} = useAsync(() => {
    if (!id) return dispatch(usersActions.clearItem({}));
    
    return getItem({id});
  }, []);
  
  const item = useReduxState(state => state.users.item);
  
  return {item, loading, error};
}

export function useSaveItem() {
  const saveItem = useAPI({
    method: saveItemApi,
    success: saveItemSuccess,
  });
  
  function saveItemSuccess() {
    return dispatch => {
      dispatch(push(routes.ADMIN_ROUTE + routes.EMPLOYEE_ROUTE + routes.LIST_ROUTE));
    }
  }
  
  const {execute: onSave, loading, error} = useAsyncCallback(saveItem);
  
  return {onSave, loading, error};
}

export function useDeleteItem() {
  const deleteItem = useAPI({
    method: deleteItemApi
  });
  
  const {execute, loading, error} = useAsyncCallback(deleteItem);
  
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
