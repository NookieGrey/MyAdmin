import React from 'react';

import {SimplePage} from "../../widgets/layout/public/simplePage/SimplePage";

export function Page500() {
  return (
    <SimplePage
      title="Error 500"
      text="something went wrong"
      showMainPageButton
    />
  );
}