import {http} from "../utils/httpClient";

export function getListApi(page) {
  return http({
    url: `/users/list?page=${page || 1}` //eslint-disable-line
  });
}

export function getItemApi(data) {
  return http({
    url: `/users/item/${data.id}`
  });
}

export function saveItemApi(data) {
  return http({
    url: `/users/item/${data.id || 0}`, //eslint-disable-line
    method: "POST",
    data,
  });
}

export function deleteItemApi(id) {
  return http({
    url: `/users/item/${id}`, //eslint-disable-line
    method: "DELETE",
  });
}
