import {useState} from "react";

import {useLocation} from "react-router";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import qs from "query-string";
import {notification} from "antd";

export function useAction(options) {
  const dispatch = useDispatch();

  return function (data) {
    if (options.init) dispatch(options.init(data));

    return options.api(data)
      .then(response => {
        if (options.success) dispatch(options.success(response.data));

        return response.data;
      })
      .catch(error => {
        if (options.fail) dispatch(options.fail(error));

        notification.error({
          message: error.response.data.message
        });

        throw error;
      })
  }
}

// to store a function we need to wrap it as useState consider's it as callback
export function useFunctionState(defaultValue) {
  const [state, setState] = useState(() => defaultValue);

  function setFunction(newValue) {
    setState(() => newValue);
  }

  return [state, setFunction];
}

export function useReduxState(selector) {
  const state = useSelector(selector, shallowEqual);

  return state;
}

export function useQuery(options) {
  let {search} = useLocation();

  return qs.parse(search, options);
}
