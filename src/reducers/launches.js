// @flow
import { FETCH_ITEMS_SUCCESS } from "../constants/actionTypes";

type State = {
  isFetching: boolean,
  items: Object
};

const INITIAL_STATE = { isFetching: false, items: {} };

const launches = (state: State = INITIAL_STATE, action: Object): Object => {
  switch (action.type) {
    case FETCH_ITEMS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items
      });
    default:
      return state;
  }
};

export default launches;
