import '../assets/styles/index.less';

import React from "react";

import {Provider} from "react-redux";
import {ConnectedRouter} from "connected-react-router";

import {ErrorBoundary} from "./ErrorBoundary";

import {AuthControl} from "../modules/auth/AuthControl";
import {AllRoutes} from "../modules/AllRoutes";

import {store, history} from "./store";

export function Core() {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <ErrorBoundary>
                    <AuthControl>
                        <AllRoutes/>
                    </AuthControl>
                </ErrorBoundary>
            </ConnectedRouter>
        </Provider>
    );
}