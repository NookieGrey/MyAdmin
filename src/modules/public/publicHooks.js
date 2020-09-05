import {useAsyncCallback} from "react-async-hook";
import {useDispatch} from "react-redux";
import {push} from "connected-react-router";

import {forgotPasswordApi, getProfileApi, resetPasswordApi, signInApi, signUpApi} from "../../api/authApi";
import {authActions} from "../auth/authSlice";

import * as routes from "../../constants/routes";

function useGetProfileAfter(api) {
  let dispatch = useDispatch();
  
  return useAsyncCallback(callback);
  
  async function callback(payload) {
    const response = await api(payload);
    
    localStorage.setItem("token", response.token);
    
    const profile = await getProfileApi();
    
    dispatch(authActions.setProfile(profile));
    
    return profile;
  }
}

export function useSignIn() {
  return useGetProfileAfter(signInApi);
}

export function useSignUp() {
  return useGetProfileAfter(signUpApi);
}

export function useForgotPassword() {
  let dispatch = useDispatch();
  
  async function callback(payload) {
    await forgotPasswordApi(payload);
    
    dispatch(push(routes.EMAIL_SENT_ROUTE));
  }
  
  return useAsyncCallback(callback);
}

export function useResetPassword() {
  let dispatch = useDispatch();
  
  async function callback(payload) {
    await resetPasswordApi(payload);
    
    dispatch(push(routes.SIGN_IN_ROUTE));
  }
  
  return useAsyncCallback(callback);
}