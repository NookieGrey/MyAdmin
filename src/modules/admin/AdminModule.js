import {ModuleFabric} from "../../utils/ModuleFabric";

export const AdminModule = ModuleFabric(() => import(/* webpackChunkName: "AdminRoutes" */ "./AdminRoutes"));