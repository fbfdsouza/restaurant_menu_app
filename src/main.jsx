import React from "react";
import ReactDOM from "react-dom";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./redux/reducers";
import "./styles/styles.css";
import "core-js/stable";
import "regenerator-runtime/runtime";
import App from "./components/App";

import ons from "onsenui";
import "onsenui/css/onsenui.css";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

const rootElement = document.getElementById("root");

ons.ready(() =>
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootElement
  )
);
