import React from "react";
import { useAsync } from 'react-async-hook';

import { Loader } from "../widgets/loader/Loader";

import { registerReducer } from "../core/store";

export function ModuleFabric(componentLoader, reducerLoader = () => Promise.resolve()) {
  return function ModuleLoader(props) {
    const { loading, error, result: Component } = useAsync(registerModule, []);

    if (error) throw error;

    if (loading) return <Loader/>;

    return <Component {...props} />;

    async function registerModule() {
      const [componentModule, reducerModule] = await Promise.all([
        componentLoader(),
        reducerLoader()
      ]);

      if (reducerModule) {
        registerReducer(reducerModule.reducerName, reducerModule.reducer);
      }

      return componentModule[componentModule.moduleName];
    }
  };
}
