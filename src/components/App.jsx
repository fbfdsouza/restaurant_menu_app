import React from "react";
import { Navigator } from "react-onsenui";
import MakeOrderPage from "../containers/pages/MakeOrderPage";

const renderPage = (route, navigator) => (
  <route.component key={route.key} navigator={navigator} />
);

const App = () => (
  <Navigator
    renderPage={renderPage}
    initialRoute={{ component: MakeOrderPage, key: "MAIN_PAGE" }}
  />
);

export default App;
