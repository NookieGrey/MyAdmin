import React from 'react';

import {SimplePage} from "../../widgets/layout/public/simplePage/SimplePage";

export function Page404() {
  return (
    <SimplePage
      title={`Error 404`}
      text={"attempt to access a wrong or restricted route"}
      showMainPageButton
    />
  );
}