import {http} from "../utils/httpClient";

export function getListApi(page) {
  return http({
    url: `/users/list?page=${page || 1}` //eslint-disable-line
  });
}

export function getItemApi(id) {
  return http({
    url: `/users/item/${id}`
  });
}

export function saveItemApi(data) {
  return http({
    url: `/users/item`,
    method: "POST",
    data,
  });
}

export function deleteItemApi(id) {
  return http({
    url: `/users/item/${id}`,
    method: "DELETE",
  });
}
