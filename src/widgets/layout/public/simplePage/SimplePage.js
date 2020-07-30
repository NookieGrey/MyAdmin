import "./simple-page.less";

import React from 'react';

import {PublicLayout} from "../PublicLayout";
import {Button} from "../../../formik";

import * as routes from "../../../../constants/routes";

export function SimplePage(props) {
  return (
    <PublicLayout>
      <Title title={props.title}/>
      <Text text={props.text}/>
      <MainPageButton show={props.showMainPageButton}/>
    </PublicLayout>
  );
}

function Title(props) {
  if (!props.title) return null;

  return (
    <h1 className="title">
      {props.title}
    </h1>
  )
}

function Text(props) {
  if (!props.text) return null;

  return (
    <div className="text">
      {props.text}
    </div>
  )
}

function MainPageButton(props) {
  if (!props.show) return null;

  return (
    <div className="main-page-button-wrapper">
      <Button to={routes.ROOT_ROUTE}>
        Return to Main Page
      </Button>
    </div>
  )
}