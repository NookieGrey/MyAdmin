import {ModuleFabric} from "../../utils/ModuleFabric";

export const PublicModule = ModuleFabric(() => import(/* webpackChunkName: "PublicRoutes" */ "./PublicRoutes"));