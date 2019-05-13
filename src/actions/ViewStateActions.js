import * as viewStateActionsCreator from "./viewState.actions_creator";
import cookie from "react-cookies";

export function setViewState(prop, value) {
  return function(dispatch) {
    dispatch(viewStateActionsCreator.setViewStateAction(prop, value));
  };
}
