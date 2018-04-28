// @flow
import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import configureStore from "../store/configureStore";
import AsyncApp from "./AsyncApp";

const store: () => Function = configureStore();

export default class Root extends Component<void> {
  render() {
    return (
      <Provider store={store}>
        <AsyncApp />
      </Provider>
    );
  }
}
