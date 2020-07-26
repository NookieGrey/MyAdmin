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
    data
  });
}
