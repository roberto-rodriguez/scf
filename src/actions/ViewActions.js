import * as viewActionsCreator from "./view.actions_creator";
import cookie from "react-cookies";
import * as Proxy from "./Proxy";

export function setViewState(prop, value) {
  return function(dispatch) {
    dispatch(viewActionsCreator.setViewStateAction(prop, value));
  };
}

export function toggleViewState(prop) {
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

export function setViewStateProps(propsObj) {
  return function(dispatch) {
    dispatch(viewActionsCreator.setViewStatePropsAction(propsObj));
  };
}

export function addToClientWaitingList(email, callback) {
  return function(dispatch) {
    cookie.save("addedToWaitingList", true);

    dispatch(viewActionsCreator.setViewStateAction("addedToWaitingList", true));

    Proxy.post("clientWaitingList/add", { email }, callback);
  };
}
