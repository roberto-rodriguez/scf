import * as viewActionsCreator from "./view.actions_creator";

export function setViewState(prop, value) {
  return function(dispatch) {
    dispatch(viewActionsCreator.setViewStateAction(prop, value));
  };
}

export function toggleViewState(prop, value) {
  return function(dispatch, getState) {
    var { viewReducer } = getState();
    dispatch(viewActionsCreator.setViewStateAction(prop, !viewReducer[prop]));
  };
}

export function doFilter() {
  return function(dispatch) {
    dispatch(viewActionsCreator.setViewStateAction("showFilters", false));
    dispatch(viewActionsCreator.increaseFilterCountAction());
  };
}
