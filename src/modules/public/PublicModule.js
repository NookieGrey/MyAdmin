import {ModuleFabric} from "../../utils/ModuleFabric";

export const PublicModule = ModuleFabric(() => import(/* webpackChunkName: "AdminRoutes" */ "./PublicRoutes"));