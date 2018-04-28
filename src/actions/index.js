import * as actionTypes from "../constants/actionTypes";

export type Action =
  | { type: string, items: Object }
  | { type: string, hasErrored: boolean }
  | { type: string, isLoading: boolean };

export const fetchItemsSuccess = (items: Object): Action => {
  return {
    type: actionTypes.FETCH_ITEMS_SUCCESS,
    items
  };
};

export const receiveItemsSuccess = (items: Object): Action => {
  return {
    type: actionTypes.RECEIVE_LAUNCHES,
    items
  };
};

export const hasErrors = (bool: boolean): Action => ({
  type: actionTypes.HAS_ERRORS,
  hasErrored: bool
});

export const isLoading = (bool: boolean): Action => ({
  type: actionTypes.IS_LOADING,
  isLoading: bool
});
