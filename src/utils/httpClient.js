import axios from "axios";

import {baseServerUrl} from "../constants/server";
import {notification} from "antd";

const instance = axios.create({
  baseURL: baseServerUrl
});

export async function http(options) {
  try {
    const response = await instance.request({
      ...options,
      headers: {
        token: localStorage.getItem("token") || "",
      }
    })
    
    return response.data;
    
  } catch (error) {
    notification.error({
      message: error.response?.data.message || error.message
    });
  
    throw error;
  }
}
