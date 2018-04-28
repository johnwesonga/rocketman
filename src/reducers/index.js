// @flow
import { combineReducers } from "redux";
import launches from "./launches";
import { itemsHasErrored, itemsIsLoading } from "./loadingState";

const rootReducer = combineReducers({
  launches,
  itemsHasErrored,
  itemsIsLoading
});

export default rootReducer;
