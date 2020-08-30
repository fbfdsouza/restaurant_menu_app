import { createBrowserHistory } from "history";

export const getHistory = () => {
  window.browserHistory = window.browserHistory || createBrowserHistory();

  return window.browserHistory;
};
