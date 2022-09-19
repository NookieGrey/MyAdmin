import {
  configureStore,
  getDefaultMiddleware,
  combineReducers
} from "@reduxjs/toolkit";
import { createBrowserHistory } from "history";
import loggerMiddleware from "redux-logger";
import { connectRouter, routerMiddleware } from "connected-react-router";

import {
  reducer as authReducer,
  name as authname
} from "../modules/auth/authSlice";
import { development, logDebug } from "../utils/utils";

export const history = createBrowserHistory({basename: "/MyAdmin"});

const routeMiddleware = routerMiddleware(history);
const middleware = [...getDefaultMiddleware(), routeMiddleware];

if (development) {
  middleware.push(loggerMiddleware);
}

export const store = configureStore({
  reducer: createRootReducer(),
  middleware
});

function createRootReducer(reducers) {
  return combineReducers({
    router: connectRouter(history),
    [authname]: authReducer,
    ...reducers
  });
}

const asyncReducers = {};

export function registerReducer(name, reducer) {
  if (!name || !reducer) return;

  if (Object.prototype.hasOwnProperty.call(asyncReducers, name)) return;

  asyncReducers[name] = reducer;
  store.replaceReducer(createRootReducer(asyncReducers));

  logDebug("registered reducer: " + name);
}
