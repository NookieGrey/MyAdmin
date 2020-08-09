import {ModuleFabric} from "../../../utils/ModuleFabric";

export const UsersModule = ModuleFabric(
  () => import(/* webpackChunkName: "UsersRoutes" */ "./UsersRoutes"),
  () => import(/* webpackChunkName: "usersSlice" */ "./redux/usersSlice"),
);