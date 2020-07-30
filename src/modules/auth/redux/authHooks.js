import {useCallback} from "react";
import {useDispatch} from "react-redux";
import {useAsync, useAsyncCallback} from "react-async-hook";
import {push} from "connected-react-router";

import {useAPI, useReduxState} from "../../../utils/hooks";

import {forgotPasswordApi, getProfileApi, resetPasswordApi, signInApi, signUpApi} from "../../../api/authApi";

import {authActions} from "./authSlice";

import * as routes from "../../../constants/routes";

export function useSignOut() {
  const dispatch = useDispatch();

  return useCallback(() => dispatch(authActions.signOut()), [dispatch])
}

function useGetProfile() {
  return useAPI({
    method: getProfileApi,
    success: authActions.setProfile,
  });
}

export function useRole() {
  const getProfile = useGetProfile();

  const {loading, error} = useAsync(() => {
    const token = localStorage.getItem("token");

    if (token) return getProfile({token});
  }, []);

  const role = useReduxState(state => state.auth.user?.role);

  return {role, loading, error};
}

function useCallProfile() {
  const getProfile = useGetProfile();

  return payload => {
    localStorage.setItem("token", payload.token);

    return dispatch => {
      return getProfile(payload);
    }
  }
}

export function useSignIn() {
  const callProfile = useCallProfile();

  const signInAction = useAPI({
    method: signInApi,
    success: callProfile
  })

  const {execute: onSignIn, loading, error} = useAsyncCallback(signInAction);

  return {onSignIn, loading, error};
}

export function useSignUp() {
  const callProfile = useCallProfile();

  const signUpAction = useAPI({
    method: signUpApi,
    success: callProfile
  })

  const {execute: onSignUp, loading, error} = useAsyncCallback(signUpAction);

  return {onSignUp, loading, error};
}

export function useForgotPassword() {

  const forgotPasswordAction = useAPI({
    method: forgotPasswordApi,
    success: forgotPasswordSuccess
  })

  function forgotPasswordSuccess() {
    return dispatch => {
      dispatch(push(routes.EMAIL_SENT_ROUTE));
    }
  }

  const {execute: onForgotPassword, loading, error} = useAsyncCallback(forgotPasswordAction);

  return {onForgotPassword, loading, error};
}

export function useResetPassword() {

  const resetPasswordAction = useAPI({
    method: resetPasswordApi,
    success: resetPasswordSuccess
  })

  function resetPasswordSuccess() {
    return dispatch => {
      dispatch(push(routes.SIGN_IN_ROUTE));
    }
  }

  const {execute: onResetPassword, loading, error} = useAsyncCallback(resetPasswordAction);

  return {onResetPassword, loading, error};
}