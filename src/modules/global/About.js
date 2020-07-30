import React from 'react';

import {SimplePage} from "../../widgets/layout/public/simplePage/SimplePage";

import packageJSON from "../../../package.json";

export function About() {
  return (
    <SimplePage
      title={`MyAdmin v${packageJSON.version}`}
      text={"Simple application template\nDeveloped by @NookieGrey"}
      showMainPageButton
    />
  );
}