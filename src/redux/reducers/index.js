import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import orderTotalReducer from "./orderTotalReducer";

export default combineReducers({
  form: formReducer,
  orderTotal: orderTotalReducer,
});
