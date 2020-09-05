import {useDispatch, useSelector} from "react-redux";
import {push} from "connected-react-router";

import {useLocation} from "react-router";
import {baseServerUrl} from "../../../constants/server";

import * as routes from "../../../constants/routes";

import noAva from "./no-avatar.jpg";
import {useCallback} from "react";
import {authActions} from "../../../modules/auth/authSlice";

export function useMenuSelect() {
    const dispatch = useDispatch();

    return function onMenuSelect(selected) {
        dispatch(push(routes.ADMIN_ROUTE + selected.key))
    };
}

export function useActivePage() {
    const location = useLocation();

    // eslint-disable-next-line no-magic-numbers
    return "/" + location.pathname.split("/")[2];
}

export function useAva() {
    const ava = useSelector(state => state.auth.user?.ava);

    if (!ava) return noAva;
    
    return baseServerUrl + ava;
}

export function useSignOut() {
    const dispatch = useDispatch();
    
    return useCallback(() => {
        dispatch(authActions.signOut());
        
        localStorage.removeItem("token");
    }, [dispatch]);
}