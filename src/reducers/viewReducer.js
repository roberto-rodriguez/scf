import initialState from "./initialState";

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function viewReducer(state = initialState.viewState, action) {
  var { type } = action;
  var data = action.data || {};

  switch (type) {
    case "SET_VIEW_STATE":
      return {
        ...state,
        [data.prop]: data.value
      };
    case "SET_VIEW_STATE_PROPS":
      return {
        ...state,
        ...data
      };

    case "INCREASE_FILTER_COUNT":
      return {
        ...state,
        filterCount: state.filterCount + 1
      };

    default:
      return state;
  }
}
