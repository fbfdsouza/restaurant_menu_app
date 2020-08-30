import React from "react";
import { render } from "react-dom";
import ons from "onsenui";
import "onsenui/css/onsenui.css";

const App = () => {
  return <div>Hi</div>;
};

const rootElement = document.getElementById("root");

ons.ready(() => render(<App />, rootElement));
