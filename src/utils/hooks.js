import {useLocation} from "react-router";
import {useDispatch} from "react-redux";
import qs from "query-string";

export function useAPI(options) {
  let dispatch = useDispatch();
  
  return async function (payload) {
    if (options.init) dispatch(options.init(payload));
    
    const response = await options.api(payload)
    
    if (options.success) dispatch(options.success(response));
    
    return response;
  }
}

export function useQuery(options) {
  let {search} = useLocation();
  
  return qs.parse(search, options);
}
