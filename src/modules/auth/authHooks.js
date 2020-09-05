import {useAsync} from "react-async-hook";
import {useDispatch, useSelector} from "react-redux";

import {getProfileApi} from "../../api/authApi";

import {authActions} from "./authSlice";

export function useRole() {
  let dispatch = useDispatch();
  
  const {loading, error} = useAsync(callback, []);
  
  const role = useSelector(state => state.auth.user?.role);
  
  return {role, loading, error};
  
  async function callback() {
    const token = localStorage.getItem("token");
    
    if (!token) return;
    
    const profile = await getProfileApi();
    
    dispatch(authActions.setProfile(profile));
  }
}