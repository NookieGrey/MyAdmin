import "./dashboard.less";

import React from 'react';

import {Loader} from "../../../widgets/loader/Loader";

import {DashboardCalls} from "./DashboardCalls";
import {DashboardGoods} from "./DashboardGoods";
import {DashboardUsers} from "./DashboardUsers";

import {useDashboard} from "./dashboardHooks";
import {registerReducer} from "../../../core/store";
import {reducer, name} from './dashboardSlice';

export default function Dashboard() {
  registerReducer(name, reducer);
  
  const {calls, goods, users, loading} = useDashboard();
  
  if (loading) return <Loader/>;
  
  return (
    <div className="dashboard-page">
      <DashboardCalls calls={calls}/>
      <DashboardGoods goods={goods}/>
      <DashboardUsers users={users}/>
    </div>
  );
}
