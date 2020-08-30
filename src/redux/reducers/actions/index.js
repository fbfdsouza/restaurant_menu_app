import { ADD_ITEM, REMOVE_ITEM } from "./constants";

export const addItem = (itemPrice) => {
  return { type: ADD_ITEM, payload: itemPrice };
};

export const removeItem = (itemPrice) => {
  return { type: REMOVE_ITEM, payload: itemPrice };
};
