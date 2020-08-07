import {http} from "../utils/httpClient";

export function getDashboardApi() {
  return http({
    url: "/dashboard"
  });
}
