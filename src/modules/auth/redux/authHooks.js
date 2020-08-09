import {useAsync, useAsyncCallback} from "react-async-hook";
import {push} from "connected-react-router";

import {useAPI, useReduxState} from "../../../utils/hooks";

import {forgotPasswordApi, getProfileApi, resetPasswordApi, signInApi, signUpApi} from "../../../api/authApi";

import {authActions} from "./authSlice";

import * as routes from "../../../constants/routes";

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

    if (token) return getProfile();
  }, []);

  const role = useReduxState(state => state.auth.user?.role);

  return {role, loading, error};
}

function useCallProfile() {
  const getProfile = useGetProfile();

  return payload => {
    localStorage.setItem("token", payload.token);

    return dispatch => {
      return getProfile();
    }
  }
}

export function useSignIn() {
  const callProfile = useCallProfile();

  const signIn = useAPI({
    method: signInApi,
    success: callProfile
  })

  const {execute: onSignIn, loading, error} = useAsyncCallback(signIn);

  return {onSignIn, loading, error};
}

export function useSignUp() {
  const callProfile = useCallProfile();

  const signUp = useAPI({
    method: signUpApi,
    success: callProfile
  })

  const {execute: onSignUp, loading, error} = useAsyncCallback(signUp);

  return {onSignUp, loading, error};
}

export function useForgotPassword() {

  const forgotPassword = useAPI({
    method: forgotPasswordApi,
    success: forgotPasswordSuccess
  })

  function forgotPasswordSuccess() {
    return dispatch => {
      dispatch(push(routes.EMAIL_SENT_ROUTE));
    }
  }

  const {execute: onForgotPassword, loading, error} = useAsyncCallback(forgotPassword);

  return {onForgotPassword, loading, error};
}

export function useResetPassword() {

  const resetPassword = useAPI({
    method: resetPasswordApi,
    success: resetPasswordSuccess
  })

  function resetPasswordSuccess() {
    return dispatch => {
      dispatch(push(routes.SIGN_IN_ROUTE));
    }
  }

  const {execute: onResetPassword, loading, error} = useAsyncCallback(resetPassword);

  return {onResetPassword, loading, error};
}