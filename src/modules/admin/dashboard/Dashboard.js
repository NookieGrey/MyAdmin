import "./dashboard.less";

import React from 'react';

import {Loader} from "../../../widgets/loader/Loader";

import {DashboardCalls} from "./DashboardCalls";
import {DashboardGoods} from "./DashboardGoods";
import {DashboardUsers} from "./DashboardUsers";

import {useDashboard} from "./redux/dashboardHooks";

export const moduleName = "Dashboard";

export function Dashboard() {
  const {calls, goods, users, loading} = useDashboard();
  
  if (loading) return <Loader/>;
  
  return (
    <div className="dashboard-page">
      <DashboardCalls
        calls={calls}
      />
      <DashboardGoods
        goods={goods}
      />
      <DashboardUsers
        users={users}
      />
    </div>
  );
}
