import {
  POST_LIST_FREE_ADD,
  POST_LIST_EXPIRED_ADD
} from "../constants/actionTypes";
import objectAssign from "object-assign";
import initialState from "./initialState";

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function postReducer(state = initialState.deals, action) {
  var { type, data } = action;

  switch (type) {
    case "POST_LIST_ADD":
    console.log('reducer POST_LIST_ADD -> ');
      var { freePostList, expiredPostList } = data;

      var newState = objectAssign({}, state, {
        freePostList: objectAssign({}, state.freePostList, freePostList),
        expiredPostList: objectAssign(
          {},
          state.expiredPostList,
          expiredPostList
        )
      }); 
      return newState;

    case 'REGION_UPDATE':
      console.log('reducer REGION_UPDATE -> ' + action.region);
      return objectAssign({}, state, { region: action.region });

    case POST_LIST_EXPIRED_ADD:
      return objectAssign({}, state, { region: data.region });

    default:
      return state;
  }
}