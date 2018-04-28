import * as actionTypes from "../constants/actionTypes";

export const itemsHasErrored = (state = false, action) => {
  switch (action.type) {
    case actionTypes.HAS_ERRORS:
      return action.hasErrored;
    default:
      return state;
  }
};
export const itemsIsLoading = (state = false, action) => {
  switch (action.type) {
    case actionTypes.IS_LOADING:
      return action.isLoading;
    default:
      return state;
  }
};
