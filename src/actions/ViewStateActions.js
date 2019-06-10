import * as viewStateActionsCreator from "./viewState.actions_creator";
 
export function setViewState(prop, value) {
  return function(dispatch) {
    dispatch(viewStateActionsCreator.setViewStateAction(prop, value));
  };
}
