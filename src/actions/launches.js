// @flow
import * as actions from "../actions/index";
/* 
export type Action =
  | { type: string, items: Object }
  | { type: string, hasErrored: boolean }
  | { type: string, isLoading: boolean };

const fetchItemsSuccess = (items: Object): Action => {
  return {
    type: actionTypes.FETCH_ITEMS_SUCCESS,
    items
  };
};

const hasErrors = (bool: boolean): Action => ({
  type: actionTypes.HAS_ERRORS,
  hasErrored: bool
});

const isLoading = (bool: boolean): Action => ({
  type: actionTypes.IS_LOADING,
  isLoading: bool
}); */

export const fetchLatestLaunchesRequest = (): Function => {
  return function(dispatch: Function) {
    dispatch(actions.isLoading(true));
    return fetch(`https://api.spacexdata.com/v2/launches/latest`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(actions.isLoading(false));
        return response;
      })
      .then(response => response.json())
      .then(items => dispatch(actions.fetchItemsSuccess(items)))
      .catch(() => dispatch(actions.hasErrors(true)));
  };
};

export const fetchPastLaunchesRequest = (launch_year: string): Function => {
  return function(dispatch: Function) {
    dispatch(actions.isLoading(true));
    return fetch(
      `https://api.spacexdata.com/v2/launches?launch_year=${launch_year}`
    )
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(actions.isLoading(false));
        return response;
      })
      .then(response => response.json())
      .then(items => dispatch(actions.fetchItemsSuccess(items)))
      .catch(() => dispatch(actions.hasErrors(true)));
  };
};

export const fetchUpcomingLaunchesRequest = (): Function => {
  return function(dispatch: Function) {
    dispatch(actions.isLoading(true));
    return fetch(`https://api.spacexdata.com/v2/launches/upcoming`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(actions.isLoading(false));
        return response;
      })
      .then(response => response.json())
      .then(items => dispatch(actions.fetchItemsSuccess(items)))
      .catch(() => dispatch(actions.hasErrors(true)));
  };
};
