import {useAsync} from "react-async-hook";
import {useSelector} from "react-redux";

import {useAPI} from "../../../utils/hooks";

import {getDashboardApi} from "../../../api/dashboardApi";

import {dashboardActions} from "./dashboardSlice";

export function useDashboard() {
  const getDashboard = useAPI({
    api: getDashboardApi,
    success: dashboardActions.getDashboard,
  });

  const {loading, error} = useAsync(getDashboard, []);

  const {calls, goods, users} = useSelector(state => state.dashboard);

  return {calls, goods, users, loading, error};
}
