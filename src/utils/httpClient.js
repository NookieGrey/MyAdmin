import axios from "axios";

import {baseServerUrl} from "../constants/server";

const instance = axios.create({
  baseURL: baseServerUrl
});

export function http(options) {
  return instance.request({
    ...options,
    headers: {
      token: localStorage.getItem("token") || "",
      ...options.headers
    }
  });
}
