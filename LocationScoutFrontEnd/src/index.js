import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import store, { history } from "./store";
import App from "./containers/app";
import { AUTH_USER } from "./types";
import { Route } from "react-router-dom";

const target = document.querySelector("#wrapper");

const authorization = localStorage.getItem("authorization");
// if we have a token, consiger the user to be signed in
if (authorization) {
  // we need to update application state
  store.dispatch({ type: AUTH_USER });
}

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path="/" component={App} />
    </ConnectedRouter>
  </Provider>,
  target
);
