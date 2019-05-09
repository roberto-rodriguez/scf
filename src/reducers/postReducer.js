// import {
//   POST_LIST_FREE_ADD,
//   POST_LIST_EXPIRED_ADD
// } from "../constants/actionTypes";
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
      var { postList, expiredPostList } = data;

      var newState = objectAssign({}, state, {
        postList: objectAssign({}, state.postList, postList),
        expiredPostList: objectAssign(
          {},
          state.expiredPostList,
          expiredPostList
        )
      });
      return newState;

    case "REGION_UPDATE":
      return objectAssign({}, state, { region: action.region });

    case "LOAD_POST":
      var { post } = data;
      return {
        ...state,
        postList: {
          ...state.postList,
          [post.idx]: {
            ...post
          }
        }
      };

    case "LOAD_SAMPLE_SEARCH_CITY":
      var { postId, sampleSearchCity } = data;
      post = state.postList[postId] || { cityList: {} };
      return {
        ...state,
        postList: {
          ...state.postList,
          [postId]: {
            ...post,
            cityList: {
              ...post.cityList,
              [sampleSearchCity.id]: {
                ...post.cityList[sampleSearchCity.id],
                ...sampleSearchCity,
                loaded: true
              }
            }
          }
        }
      };

    case "CLEAN_POST_LIST":
      return {
        ...state,
        postList: {},
        expiredPostList: {}
      };

    default:
      return state;
  }
}
