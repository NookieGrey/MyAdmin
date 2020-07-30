import {http} from "../utils/httpClient";

export function getProfileApi(data) {
  return http({
    url: "/profile",
    params: data
  });
}

export function signInApi(data) {
  return http({
    url: "/sign-in",
    method: "POST",
    data
  });
}

export function signUpApi(data) {
  return http({
    url: "/sign-up",
    method: "POST",
    data
  });
}

export function forgotPasswordApi(data) {
  return http({
    url: "/forgot-password",
    method: "POST",
    data
  });
}

export function resetPasswordApi(data) {
  return http({
    url: "/reset-password",
    method: "POST",
    data
  });
}
