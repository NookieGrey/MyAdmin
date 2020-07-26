import {useCallback} from "react";
import {useDispatch} from "react-redux";
import {useAsync, useAsyncCallback} from "react-async-hook";

import {useAction, useReduxState} from "../../../utils/hooks";

import {getProfileApi, signInApi} from "../../../api/authApi";
import {authActions} from "./authSlice";

export function useSignOut() {
  const dispatch = useDispatch();

  return useCallback(() => dispatch(authActions.signOut()), [dispatch])
}

export function useSignIn() {
  const signInAction = useAction({
    api: signInApi,
    success: authActions.signIn
  })

  const {execute: onSignIn, loading, error} = useAsyncCallback(signInAction);

  return {onSignIn, loading, error};
}

export function useRole() {
  const getProfileAction = useAction({
    api: getProfileApi,
    success: authActions.setProfile,
  });

  const token = localStorage.getItem("token");
  let action = () => null;
  if (token) action = () => getProfileAction({token});

  const role = useReduxState(state => state.auth.user?.role);

  const {loading, error} = useAsync(action, []);

  return {role, loading, error};
}
