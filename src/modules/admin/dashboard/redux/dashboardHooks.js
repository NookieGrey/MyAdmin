import {useAsync} from "react-async-hook";

import {useAPI, useReduxState} from "../../../../utils/hooks";

import {getDashboardApi} from "../../../../api/dashboardApi";

import {dashboardActions} from "./dashboardSlice";

export function useDashboard() {
  const getDashboard = useAPI({
    method: getDashboardApi,
    success: dashboardActions.getDashboard,
  });

  const {loading, error} = useAsync(getDashboard, []);

  const {calls, goods, users} = useReduxState(state => state.dashboard);

  return {calls, goods, users, loading, error};
}
