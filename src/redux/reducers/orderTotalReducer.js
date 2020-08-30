import { ADD_ITEM, REMOVE_ITEM } from "./actions/constants";

export default (state = 0, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return state + action.payload;
    case REMOVE_ITEM:
      return state - action.payload;
    default:
      return state;
  }
};
