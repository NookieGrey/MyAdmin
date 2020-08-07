import {ModuleFabric} from "../../../utils/ModuleFabric";

export const DashboardModule = ModuleFabric(
  () => import(/* webpackChunkName: "AdminRoutes" */ "./Dashboard"),
  () => import(/* webpackChunkName: "dashboardSlice" */ "./redux/dashboardSlice")
);